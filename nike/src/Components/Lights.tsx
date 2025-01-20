
const Scene = () => {
  return (
    <>
      <directionalLight
        castShadow
        intensity={2.5}
        position={[-3, 5, -5]} 
        shadow-mapSize-width={128}
        shadow-mapSize-height={128}
        shadow-camera-near={0.1} 
        shadow-camera-far={50} 
        shadow-camera-left={-10} 
        shadow-camera-right={10} 
        shadow-camera-top={10}
        shadow-camera-bottom={-10} 
        shadow-radius={30} 
        shadow-bias={-0.005}
        color="#FF6C71"
      />
    </>
  );
};

export default Scene;
