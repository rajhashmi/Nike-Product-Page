import { Text } from "@react-three/drei";

function Html() {
  return (
    <>
    <Text
    castShadow
      font="./bebas-neue-v9-latin-regular.woff"  
      position={[0, 3, 5]}
      letterSpacing={0.05}
      scale={[10, 10, 10]}
      rotation={[0, Math.PI, 0]}
      color="#C6373C"  
      anchorX="center"  
      anchorY="middle"  
    //   addEventListener={}
    onClick={()=>{
        
    }}
    >
      AIR JORDAN
    </Text>
    <Text
    castShadow
      font="./bebas-neue-v9-latin-regular.woff"  
      position={[-15, -1.5  , 5]}
      letterSpacing={0.05}
      scale={[2, 2, 2]}
      rotation={[0, Math.PI, 0]}
      color="#C6373C"  
      anchorX="center"  
      anchorY="middle"  
    //   addEventListener={}
    onClick={()=>{
        
    }}
    >
      Mid Fire Red
    </Text>
    

    </>
 
  );
}

export default Html;
