import { Float, Stage, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

 function Model() {
const {scene} = useGLTF("/nike.glb");
scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;  
    }
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
        <Float speed={2} floatIntensity={2}>
        <primitive object={scene} rotation={[-1,1.1,1]} position={[0,-2,0]} scale={3} />
        </Float>
  
      {/* </Stage> */}
      </Suspense>
 
  )
}
export default Model

useGLTF.preload('/nike.glb')