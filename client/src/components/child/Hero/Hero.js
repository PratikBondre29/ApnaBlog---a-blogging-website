import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <header className="py-5 bg-light border-bottom mb-4 mt-2 header">
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder">Welcome to Apna Blog!</h1>
            <p className="lead text-white mb-0">
              Wanna write a blog, then you're at the right place!
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
