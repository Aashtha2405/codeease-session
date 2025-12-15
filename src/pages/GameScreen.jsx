import React from "react";
import { useLocation } from "react-router-dom";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #282c34, #3a3f47)",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Game Page
      </h1>
      <p style={{ fontSize: "1.5rem", color: "#dcdcdc" }}>
        Selected Difficulty:{" "}
        <span style={{ color: "#fff", fontWeight: "bold" }}>{difficulty}</span>
      </p>
    </div>
  );
};

export default GameScreen;
