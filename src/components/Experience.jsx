import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";

export const Experience = ({ section, menuOpened }) => {
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  // Track previous section to detect transitions
  const prevSection = useRef(section);
  const [avatarAnimation, setAvatarAnimation] = useState("Standing");

  useEffect(() => {
    // Falling animation from About → Skills
if (prevSection.current === 0 && section === 1) {
  setAvatarAnimation("Falling");
  setTimeout(() => setAvatarAnimation("Standing"), 1000);
}

    // Falling animation from Skills → Projects
    if (prevSection.current === 1 && section === 2) {
      setAvatarAnimation("Falling");
      setTimeout(() => setAvatarAnimation("Standing"), 1000);
    }

    // Falling animation from Projects → Contact
    if (prevSection.current === 2 && section === 3) {
      setAvatarAnimation("Falling");
      setTimeout(() => setAvatarAnimation("Standing"), 1000);
    }

    prevSection.current = section;
  }, [section]);

  // Animate camera for menu opening/closing
  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, framerMotionConfig);
    animate(cameraLookAtX, menuOpened ? 5 : 0, framerMotionConfig);
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

// Avatar scale & position
const avatarScale =
  section === 3
    ? 7       // Contact page much bigger
    : section === 0
    ? 3.5     // About page bigger
    : 2;      // Other sections

const avatarPositionY =
  section === 3
    ? -12      // Contact page way lower
    : section === 0
    ? -4       // About page lower
    : -1.5;   // Other sections

const avatarPositionX =
  section === 3
    ? 5        // Contact page further to the right
    : section === 0
    ? -4.5     // About page more to the left
    : 0;


  return (
    <>
      <ambientLight intensity={1} />

      {/* OFFICE */}
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
      </motion.group>

      {/* SKILLS & PROJECTS & CONTACT */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z:
            section === 1
              ? 0
              : section === 2
              ? -10
              : section === 3
              ? -20
              : -10,
          y:
            section === 1
              ? -viewport.height
              : section === 2
              ? -viewport.height * 2
              : section === 3
              ? -viewport.height * 3
              : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />

        {/* Example floating objects */}
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>

        {/* AVATAR */}
        <group
          scale={[avatarScale, avatarScale, avatarScale]}
          position={[avatarPositionX, avatarPositionY, 0]}
        >
          <Avatar animation={avatarAnimation} />
        </group>
      </motion.group>
    </>
  );
};
