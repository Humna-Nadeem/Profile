import React, { useEffect } from "react";
import "./Main3.css";
import img5 from "../imgs/img5.png";
import img6 from "../imgs/img6.png";
import img7 from "../imgs/img7.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Main3() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading & paragraph
    gsap.fromTo(
      ".main3 h2, .main3 p",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".main3",
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );

    // Animate cards with stagger
    gsap.fromTo(
      ".card1",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".cards",
          start: "top 85%",
          toggleActions: "restart none restart none",
        },
      }
    );
  }, []);

  return (
    <div className="main3">
      <h2>
        SMART <span className="spannnn">&</span> AFFORDABLE DIGITAL{" "}
        <span className="spannnn"> SOLUTIONS</span>
      </h2>
      <p>
        We provide UI/UX Design, Web Development, and AI Solutions to <br />
        help your business grow — at a fraction of the cost.
      </p>
      <div className="cards">
        <div className="card1">
          <img src={img5} alt="Web Dev" />
          <p>
            Web Development <br />
            Custom websites & web apps, from front to backend.
          </p>
        </div>

        <div className="card1">
          <img src={img6} alt="UI UX" />
          <p>
            UI/UX Design <br />
            Custom websites & web apps, from front to backend.
          </p>
        </div>

        <div className="card1">
          <img src={img7} alt="AI" />
          <p>
            AI Integration <br />
            Chatbots, smart automation, and data-driven tools.
          </p>
        </div>
      </div>
    </div>
  );
}
