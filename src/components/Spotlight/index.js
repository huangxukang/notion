import React, { useState, useEffect } from "react";

const Spotlight = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [display, setDisplay] = useState("none");

  const handleMouseMove = (event) => {
    if (document.body.clientWidth > 1000) {
      const x = event.clientX;
      const y = event.clientY;
      if (
        x > 40 &&
        x < document.body.clientWidth - 40 &&
        y > 40 &&
        y < document.body.clientHeight - 40
      ) {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
        setDisplay("block");
      } else {
        setDisplay("none");
      }
    } else {
      setDisplay("none");
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div onMouseMove={handleMouseMove}>
      <div
        style={{
          display: display,
          width: "80px",
          height: "80px",
          border: "1px solid #ff0080",
          borderRadius: "50%",
          pointerEvents: "none",
          position: "fixed",
          top: mouseY - 40,
          left: mouseX - 40,
          zIndex: 9999,
        }}
      ></div>
    </div>
  );
};

export default Spotlight;
