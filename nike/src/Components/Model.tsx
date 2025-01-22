import { Float, Stage, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react'


function Model() {
const {scene} = useGLTF("/nike.glb");
const yCamera = useRef(0); 
const targetY = useRef(0);  

scene.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
  }
});

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;  
    targetY.current = scrollY / 100;  
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

useFrame((state, delta) => {
  yCamera.current += (targetY.current - yCamera.current) * 0.1;

  state.camera.position.y = -yCamera.current;


});

  return (
    <Suspense fallback={null}>
        {/* <Stage
        preset="rembrandt" 
        intensity={2} 
        contactShadow 
        shadows  
        adjustCamera={false}
        environment="city"
      > */}
        <Float speed={4} floatIntensity={2}
        floatingRange={[0, 1]}
        >
        <primitive object={scene} rotation={[-1,1.1,1]} position={[0,-2,0]} scale={3} />
        </Float>
  
      {/* </Stage> */}
      </Suspense>
 
  )
}
export default Model

useGLTF.preload('/nike.glb')