import React, { useState, useRef, useEffect } from "react";

const Spotlight = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} onMouseMove={handleMouseMove}>
      <div
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid #ff0080",
          borderRadius: "50%",
          pointerEvents: "none",
          position: "fixed",
          top: mouseY - 50,
          left: mouseX - 50,
        }}
      ></div>
    </div>
  );
};

export default Spotlight;
