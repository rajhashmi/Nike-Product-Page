import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const ObstacleGenerator = ({ count }) => {
  const ref = useRef<THREE.InstancedMesh | null>(null)
  
  // Memoize the material and geometry to avoid recreating on each render
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: '#FF6C71' }), [])
  const geometry = useMemo(() => new THREE.SphereGeometry(0.5), [])
  
  // Generate random positions for obstacles
  const positions = useMemo(() => {
    const positions = []
    for (let i = 0; i < count; i++) {
      positions.push([
        Math.random() * 18 - 12,  // Random x between -6 and 6
        Math.random() * 10 - 5,   // Random y between -3 and 3
        Math.random() * 5 - 2.5, // Random z between -1.5 and 1.5
      ])
    }
    return positions
  }, [count])

  useEffect(() => {
    if (ref.current) {
      // Start updating matrices for each instance at once
      const matrix = new THREE.Matrix4()

      positions.forEach((position, index) => {
        matrix.setPosition(new THREE.Vector3(...position))
        ref.current.setMatrixAt(index, matrix)
      })

      ref.current.instanceMatrix.needsUpdate = true  // Mark the matrix as needing update
    }
  }, [positions, count])

  return (
    <instancedMesh ref={ref} args={[geometry, material, count]}>
      {/* No need to add children because instancedMesh handles them automatically */}
    </instancedMesh>
  )
}

function Obstacle() {
  const count = 6 // Set the number of obstacles

  return (
    <ObstacleGenerator count={count} />

  )
}

export default Obstacle
