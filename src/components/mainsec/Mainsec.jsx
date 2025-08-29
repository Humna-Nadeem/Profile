import React, { useEffect, useRef } from "react";
import "./Mainsec.css";
import { gsap } from "gsap";
import img1 from "../imgs/img1.jpg"; // ✅ Import background image

export default function Mainsec() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="maindiv" ref={sectionRef}>
      <div className="overlay">
        <div className="text">
          <h2>
            AFFORDABLE <span className="span">UI/UX</span> DESIGN,
            <br />
            <span className="span">WEB</span> DEVELOPMENT &{" "}
            <span className="span">AI</span> SOLUTIONS.
          </h2>
          <br />
          <p>
            DevK System delivers powerful websites, clean UI/UX, and AI
            solutions that scale — without breaking your budget.
          </p>
          <button className="shine-btn">Let's Talk</button>
        </div>
      </div>
    </div>
  );
}
