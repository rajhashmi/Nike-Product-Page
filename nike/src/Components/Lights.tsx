import  { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Scene = () => {
  const lightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (lightRef.current) {
      const helper = new THREE.DirectionalLightHelper(lightRef.current, 5, 0xff0000);
      scene.add(helper);

      const shadowCameraHelper = new THREE.CameraHelper(lightRef.current.shadow.camera);
      scene.add(shadowCameraHelper);

      return () => {
        scene.remove(helper);
        scene.remove(shadowCameraHelper);
      };
    }
  }, [scene]);

  return (
    <>
      <directionalLight
        ref={lightRef}
        castShadow
        intensity={2.5}
        position={[-3, 5, -3]} 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1} 
        shadow-camera-far={50} 
        shadow-camera-left={-10} 
        shadow-camera-right={10} 
        shadow-camera-top={10}
        shadow-camera-bottom={-10} 
        shadow-radius={30} 
      />
    </>
  );
};

export default Scene;
