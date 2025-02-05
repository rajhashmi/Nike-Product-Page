import { Environment,  OrbitControls } from '@react-three/drei';
import './App.css';
import Scene from './Components/Lights';
import Model from './Components/Model';
import Obstacle from './Components/Obstacle';
import Html from './Components/Html';
import { useRef } from 'react';



function App() {

  return (
    <>
      
      <Scene/>
      {/* <Environment preset="city" /> */}

            <Html/>
          <Model />
            
              
    </>
  );
}

export default App;
