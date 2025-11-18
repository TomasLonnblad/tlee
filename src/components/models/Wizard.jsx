"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models14/g1.glb");

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.rotation.y =
      -0.1 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
        <group {...props} dispose={null}>

  <group ref={modelRef}>
      <group rotation={[Math.PI / -2.4, -18.85, 4.2]}>
        <group scale={-0.025}>
          <group scale={0.4}>
            <group position={50.05}>
            <group rotation={[Math.PI,0, 0]} scale={110.41}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench_BenchConcreteBase_0.geometry}
                material={materials.BenchConcreteBase}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench_BenchWood_0.geometry}
                material={materials.BenchWood}
              />
            </group>


            <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0001.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0002.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0003.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0004.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0005.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0006.geometry}
                material={materials.CeillingWire}
              />
            </group>


            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lamp_Emissive_0.geometry}
                material={materials.Emissive}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lamp_Lamp_0.geometry}
                material={materials.Lamp}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LampBase_CeillingWire_0.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LampBase_Emissive_0.geometry}
                material={materials.Emissive}
              />
            </group>

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PaitingsInside_001_Painting_0.geometry}
              material={materials.Painting}
              rotation={[-Math.PI / 2, 0.099, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PaitingsOutside_Painting_0.geometry}
              material={materials.Painting}
              rotation={[-Math.PI / 2, 0.099, 0]}
              scale={100}
            />
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls_Ceilling_0.geometry}
                material={materials.Ceilling}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls_Emissive_0.geometry}
                material={materials.Emissive}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls_Floor_0.geometry}
                material={materials.Floor}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls_Walls_0.geometry}
                material={materials.Walls}
              />
            </group>
          </group>
        </group>
      </group>
            </group>
    </group> 
   </group>
   ) ;
  })
export default Wizard;
useGLTF.preload("/models14/g1.glb");