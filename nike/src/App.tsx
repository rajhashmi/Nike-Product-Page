import { Environment,  OrbitControls } from '@react-three/drei';
import './App.css';
import Scene from './Components/Lights';
import Model from './Components/Model';
import Obstacle from './Components/Obstacle';
import Html from './Components/Html';


// import { gsap } from "gsap";
// import { gsap } from 'gsap/gsap-core';

// gsap.registerPlugin(ScrollSmoother) 

function App() {

  // ScrollSmoother.create({
  //   smooth: 1,
  //   effects: true,
  // })

  
  return (
    <>
      {/* <OrbitControls /> */}
      
      <Scene/>
      <Environment preset="city" />
            <mesh
              position={[0, -3.2, 0]}
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[60, 20, 10]}
              >
              <planeGeometry />
              <meshStandardMaterial color="#FFB6B8"   />
            </mesh>
            {/* <Obstacle/> */}
            <Html/>
              <Model/>
    </>
  );
}

export default App;
