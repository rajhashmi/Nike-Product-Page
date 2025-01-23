import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const ObstacleGenerator = ({ count }) => {
  const ref = useRef<THREE.InstancedMesh | null>(null)
  
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: '#FF6C71' }), [])
  const geometry = useMemo(() => new THREE.SphereGeometry(0.5), [])
  
  const positions = useMemo(() => {
    const positions = []
    for (let i = 0; i < count; i++) {
      positions.push([
        Math.random() * 18 - 12,   
        Math.random() * 10 - 5,   
        Math.random() * 5 - 2.5, 
      ])
    }
    return positions
  }, [count])

  useEffect(() => {
    if (ref.current) {
      const matrix = new THREE.Matrix4()

      positions.forEach((position, index) => {
        matrix.setPosition(new THREE.Vector3(...position))
        ref.current.setMatrixAt(index, matrix)
      })

      ref.current.instanceMatrix.needsUpdate = true 
    }
  }, [positions, count])

  return (
    <instancedMesh ref={ref} args={[geometry, material, count]}>
    </instancedMesh>
  )
}

function Obstacle() {
  const count = 6  

  return (
    <ObstacleGenerator count={count} />

  )
}

export default Obstacle
