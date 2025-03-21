import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.landingContainer}>
      <div style={styles.overlay}></div>
      <h1 style={styles.landingTitle}>Welcome to Our Data Portal</h1>
      <p style={styles.landingSubtitle}>
        Manage your data efficiently and securely
      </p>
      <div style={styles.landingButtons}>
        <button onClick={() => navigate("/form")} style={{ ...styles.button, ...styles.enter }}>
          Enter Data
        </button>
        <button onClick={() => navigate("/view")} style={{ ...styles.button, ...styles.view }}>
          View Data
        </button>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  landingContainer: {
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)",
  },
  landingTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "10px",
    zIndex: 1,
  },
  landingSubtitle: {
    fontSize: "1.2rem",
    fontWeight: "300",
    opacity: 0.9,
    marginBottom: "20px",
    zIndex: 1,
  },
  landingButtons: {
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Align vertically
    gap: "15px",
    zIndex: 1,
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "30px",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
  },
  enter: {
    background: "white",
    color: "#007bff",
  },
  enterHover: {
    background: "#007bff",
    color: "white",
  },
  view: {
    background: "transparent",
    color: "white",
    border: "2px solid white",
  },
  viewHover: {
    background: "white",
    color: "#007bff",
  },
};

export default LandingPage;
