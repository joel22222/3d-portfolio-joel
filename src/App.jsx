import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true); // "Click me!!" bubble

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  // Hide the "Click me!!" prompt after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>

      <Leva hidden />

      {/* Fixed chatbot button */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {/* Speech bubble */}
        {showPrompt && (
          <div
            style={{
              backgroundColor: "white",
              color: "#333",
              padding: "10px 16px",
              borderRadius: "16px",
              fontSize: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              whiteSpace: "normal",
              maxWidth: "220px",
              wordWrap: "break-word",
              lineHeight: "1.4",
              marginBottom: "12px",
              textAlign: "left",
            }}
          >
            I am here to help!
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "6px solid white",
                margin: "0 auto",
              }}
            />
          </div>
        )}

        {/* Chat button with custom face.png icon */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          style={{
            backgroundColor: "#4B6BFB",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            padding: 0,
            overflow: "hidden",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src="/textures/face.png"
            alt="Chatbot Icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </button>

        {/* Chatbot iframe */}
        {chatOpen && (
          <div
            style={{
              position: "fixed",
              bottom: "100px",
              right: "24px",
              width: "420px",
              height: "600px",
              backgroundColor: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
          >
            <iframe
              src="https://peopleprofilerschatbot.netlify.app/"
              title="SUGARBEAR Chatbot"
              width="100%"
              height="100%"
              style={{
                border: "none",
                borderRadius: "20px",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
