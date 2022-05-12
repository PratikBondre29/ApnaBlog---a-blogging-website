import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./Splash.css";
import Particles from "react-particles-js";

const particlesOption = {
  particles: {
    number: {
      value: 135,
      density: {
        enable: false,
      },
    },
    size: {
      value: 8,
      random: true,
    },
    move: {
      direction: "bottom",
      out_mode: "out",
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "remove",
      },
    },
    modes: {
      remove: {
        particles_nb: 10,
      },
    },
  },
};
const SplashContent = () => {
  return (
    <div className="box">
      <Particles params={particlesOption} className="particles" />
      <svg viewBox="0 0 1350 600" className="svg-in">
        <text x="50%" y="50%" fill="transparent" textAnchor="middle">
          APNA BL🎯G
        </text>
      </svg>
    </div>
  );
};

const Splash = () => {
  const [page, setPage] = useState("splash");

  //Splash Screen
  useEffect(() => {
    setTimeout(() => {
      setPage("unsplash");
    }, 4000);
  }, [page]);
  return <>{page === "splash" ? <SplashContent /> : <Redirect to="/home" />}</>;
};

export default Splash;
