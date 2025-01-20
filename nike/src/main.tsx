import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Canvas } from '@react-three/fiber';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  
    <Canvas
    className='canvas'
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      shadows
      dpr={[1, 1.5]}
      camera={{
        fov: 75,
        position: [0, 0, -10],
      }}
    >
      <App />
    </Canvas>
   <div className='hero'>
    <h1>
      hello
    </h1>
   </div>
   
  </>
);
