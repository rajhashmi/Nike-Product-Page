import { Text } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Html() {
  const textRef = useRef()
  useEffect(()=>{
      if(textRef.current){
        gsap.to(textRef.current, {
          scrollTrigger:{
            trigger: ".hero",
            start: "top top", 
            end: "bottom 80%", 
            scrub: true, 
          },
          fillOpacity: 0,
          duration: 1, 
          
        })
        gsap.to(textRef.current.position, {
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom 100%",
            scrub: true,
          },
          x: -10, 
          // z: 1, 
          duration: 1,
        });
        
      }
  },[]);

  return (
    <>
    <group>
    <Text
    ref={textRef}
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
 
</group>
    

    </>
 
  );
}

export default Html;
