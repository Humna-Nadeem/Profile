import React, { useEffect, useRef } from "react";
import "./Purple.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Purple() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".purple", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="pup">
        <p>
          We have experience and expertise from working with over <br />
          400+ businesses on their website strategy.
        </p>
        <button>We Would Love To Work With You Too!</button>
      </div>
    </div>
  );
}
