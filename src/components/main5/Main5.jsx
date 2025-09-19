import React, { useEffect } from "react";
import "./Main5.css";
import p1img from "../imgs/p1img.png";
import p2img from "../imgs/p2img.png";
import person2 from "../imgs/person2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Main5() {
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
    <div className="main5">
      <h2>
        <span className="spannnnn">MEET</span> THE TEAM{" "}
       
      </h2>
      <p>
        At DevK System, we’re a passionate crew of tech creatives  <br />—  small in size, big in results.
      </p>
      <div className="cardss">
        <div className="cardd1">
          <img src={p1img} alt="Web Dev" />
          <p>
            Web Development <br />
            Custom websites & web apps, from front to backend.
          </p>
        </div>

        <div className="cardd1">
          <img src={p2img} alt="UI UX" />
          <p>
            UI/UX Design <br />
            Custom websites & web apps, from front to backend.
          </p>
        </div>

        <div className="cardd1">
          <img src={person2} alt="AI" />
          <p>
            AI Integration <br />
            Chatbots, smart automation, and data-driven tools.
          </p>
        </div>
      </div>
    </div>
  );
}
