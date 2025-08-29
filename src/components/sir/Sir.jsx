import React, { useEffect, useRef } from 'react'
import "./Sir.css"
import sir1 from "../imgs/sir1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Sir() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".sir-section > div"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",   // animation starts when 80% of section is in view
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="sir-section">
        <div className="sir-img-left">
          <img src={sir1} alt="Business Growth" />
        </div>

        <div className="sir-text">
          LET'S GROW <br />
          <span>OUR BUSINESS</span>

          <p>
            When you work with us, you get an awesome team of website experts, strategic thinkers, 
            and problem solvers. All focused on helping you get the results you're looking for.
            <br /><br />
            Our team listens to you, are super easy to work with, and have the experience, expertise 
            and processes to make it all happen.
            <br /><br />
            We get to know you and your business, so together we can create a website strategy that 
            focuses on delivering the real results your business needs.
          </p>
        </div>

        <div className="sir-img-right">
          <img src={sir1} alt="Business Growth" />
        </div>
      </div>
    </div>
  )
}
