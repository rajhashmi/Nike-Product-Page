import { Float, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const { scene } = useGLTF('/nike.glb');
  const modelGroup = useRef();
  const isModelLoad = useRef(false);
  const yCamera = useRef(0);
  const targetY = useRef(0);
  const planeRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // child.material.wireframe = true;
        child.castShadow = true;
      }
    });

    if (modelGroup.current) {
      modelGroup.current.position.set(0, 12, 0);
      modelGroup.current.rotation.set(-1, 1.1, 1);

      gsap.to(modelGroup.current.position, {
        y: -1, 
        ease: "none",
        duration: 1.5, 
        onComplete: () => {
          isModelLoad.current = true;
        }
      });

      gsap.to(modelGroup.current.position, {
        x: 6, 
        z:-2,
        scrollTrigger: {
          trigger: ".hero", 
          start: "top top", 
          end: "bottom top", 
          scrub: true, 
        },
      });
      // gsap.to(modelGroup.current.rotation, {
      //   x: -3, 
      //   z:3,
      //   scrollTrigger: {
      //     trigger: ".hero", 
      //     start: "top top", 
      //     end: "bottom top", 
      //     scrub: true, 
      //   },
      // });
      if(planeRef.current){
        console.log(planeRef.current.material.opacity);
        
        gsap.to(planeRef.current.material, {
          scrollTrigger: {
            trigger: ".hero",
            start: "top top", 
            end: "bottom 0%",  
            scrub: true,    
          },
          opacity: 0, 
        });
    }

    }
      
  }, [scene]);

  useFrame((state, delta) => {
    yCamera.current += (targetY.current - yCamera.current) * 0.1;

    state.camera.position.y = -yCamera.current;
    if (modelGroup.current && isModelLoad.current) {
      modelGroup.current.position.y += (state.camera.position.y - modelGroup.current.position.y) * 0.5;
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      targetY.current = scrollY / 100;  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Suspense fallback={null}>
      <group ref={modelGroup}>
        <Float speed={4} floatIntensity={2} floatingRange={[0, 1]}>
          <primitive object={scene} scale={3} position={[0, -2, 0]} />
        </Float>
      </group>
      <mesh
      ref={planeRef}
        position={[0, -3.2, 0]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[60, 20, 10]}
      >
        <planeGeometry />
        <meshStandardMaterial color="#FFB6B8" transparent />
      </mesh>
    </Suspense>
  );
}

export default Model;

useGLTF.preload('/nike.glb');
