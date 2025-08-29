import React, { useEffect, useRef } from "react";
import "./Fom.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const formRef = useRef(null);

  useEffect(() => {
    const el = formRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="form-section" ref={formRef}>
      <div className="form-container">
        <h2 className="form-title">Keep in touch</h2>
        <p className="form-subtitle">
          Stay connected with us for health tips, tech updates, and easy appointment booking —
          we’re just a message away.
        </p>

        <form className="form-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Get a Free Quote</button>
        </form>
      </div>
    </section>
  );
}
