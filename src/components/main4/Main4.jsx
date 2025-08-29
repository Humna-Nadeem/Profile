import React, { useEffect, useRef } from "react";
import "./Main4.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Replace these with your real image filenames in src/components/imgs/
import img8 from "../imgs/img8.png";
import img9 from "../imgs/img9.png";
import img10 from "../imgs/img10.png";

gsap.registerPlugin(ScrollTrigger);

export default function Main4() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current;

    // Title + subtitle animation
    gsap.fromTo(
      container.querySelector(".main4-title"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 85%", toggleActions: "restart none restart none" },
      }
    );

    // Paragraph shine fade-in (same timing)
    gsap.fromTo(
      container.querySelector(".main4-desc"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.12,
        scrollTrigger: { trigger: container, start: "top 85%", toggleActions: "restart none restart none" },
      }
    );

    // Large left image: slide in from left (3D-ish)
    gsap.fromTo(
      container.querySelector(".img-card.big"),
      { opacity: 0, x: -120, rotateY: -8 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 85%", toggleActions: "restart none restart none" },
      }
    );

    // Right column images: stagger from right / bottom
    gsap.fromTo(
      container.querySelectorAll(".img-card.small"),
      { opacity: 0, x: 80, y: 30, rotateX: 6 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 85%", toggleActions: "restart none restart none" },
      }
    );
  }, []);

  return (
    <section className="main4" ref={sectionRef}>
      <h2 className="main4-title">
        <span className="highlight">Our strength?</span> Making everything easier for you
      </h2>

      <p className="main4-desc">
        We build beautiful UI/UX, fast & reliable websites, and smart AI integrations to scale your business.
      </p>

      <div className="image-row">
        {/* Left big image (60%) */}
        <div className="img-card big">
          <img src={img8} alt="Team working" />
        </div>

        {/* Right column (40%) with two stacked images */}
        <div className="right-col">
          <div className="img-card small">
            <img src={img9} alt="Code" />
          </div>
          <div className="img-card small">
            <img src={img10} alt="Design" />
          </div>
        </div>
      </div>
    </section>
  );
}
