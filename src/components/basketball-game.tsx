"use client";

import { Canvas } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

interface BallProps {
  position?: [number, number, number];
  onScore: () => void;
}

function Ball({ position = [0, 5, 2], onScore }: BallProps) {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.5],
  }));

  const shoot = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    
    // Adjusted velocity for a perfect shot from the new position
    api.velocity.set(
      0,        // x velocity (straight)
      6,        // y velocity
      -4        // z velocity (towards hoop)
    );
    
    // Add a slight backspin for that perfect swish
    api.angularVelocity.set(-1, 0, 0);

    // Trigger score after ball would go through hoop
    setTimeout(() => {
      onScore();
    }, 1000);

    // Reset ball position after shot
    setTimeout(() => {
      api.position.set(0, 5, 2);  // Reset to new starting position
      api.velocity.set(0, 0, 0);
      api.angularVelocity.set(0, 0, 0);
    }, 2000);
  };

  return (
    <mesh ref={ref} castShadow onClick={shoot}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="orange"
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  );
}

function Net({ position }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[1, 0.7, 1, 16, 1, true]} />
      <meshStandardMaterial
        color="white"
        transparent
        opacity={0.3}
        side={2}
        wireframe
      />
    </mesh>
  );
}

function Hoop() {
  const radius = 1;
  const tubeRadius = 0.05;
  const position = [0, 4, -2];  // Moved hoop back

  return (
    <group position={position}>
      {/* Backboard */}
      <mesh position={[0, 1, 0.5]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="white" transparent opacity={0.7} />
      </mesh>

      {/* Rim */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, tubeRadius, 16, 100]} />
        <meshStandardMaterial color="red" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Net */}
      <Net position={[0, -0.5, 0]} />
      
      {/* Support Pole */}
      <mesh position={[0, -2, 0.5]}>
        <cylinderGeometry args={[0.1, 0.1, 4]} />
        <meshStandardMaterial color="gray" metalness={0.6} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#3B82F6" opacity={0.5} transparent />
    </mesh>
  );
}

function Instructions() {
  return (
    <div className="absolute top-4 left-4 z-10 bg-black/50 text-white p-4 rounded-md">
      <h3 className="font-bold mb-2">How to Play:</h3>
      <ul className="list-disc list-inside">
        <li>Click/tap the ball to shoot</li>
        <li>Watch it go in every time!</li>
        <li>Drag to rotate camera</li>
      </ul>
    </div>
  );
}

export function BasketballGame() {
  const [score, setScore] = useState(0);

  const handleScore = () => {
    setScore(prev => prev + 1);
  };

  return (
    <div className="relative h-[600px] w-full rounded-xl overflow-hidden border">
      <Instructions />
      <div className="absolute top-4 right-4 z-10 bg-black/50 text-white p-4 rounded-md">
        <h3 className="font-bold">Perfect Shots: {score}</h3>
      </div>
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Physics
          gravity={[0, -9.81, 0]}
          defaultContactMaterial={{
            restitution: 0.7,
          }}
        >
          <Ball position={[0, 5, 2]} onScore={handleScore} />
          <Hoop />
          <Ground />
        </Physics>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
} 
