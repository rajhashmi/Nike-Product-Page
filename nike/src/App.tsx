import { Environment, OrbitControls } from '@react-three/drei';
import './App.css';
import Scene from './Components/Lights';
import Model from './Components/Model';

function App() {
  return (
    <>
      <OrbitControls />
      
      <Scene/>
      <Environment preset="city" />
            <mesh
              position={[0, -3.2, 0]}
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[60, 14, 5]}
              >
              <planeGeometry />
              <meshStandardMaterial color="white"     />
            </mesh>
              <Model/>
    </>
  );
}

export default App;
