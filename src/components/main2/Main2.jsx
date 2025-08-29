import React, { useEffect } from "react";
import "./Main2.css";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Main2() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate first heading & paragraph
    gsap.fromTo(
      ".textonly h2, .textonly p",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".textonly",
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );

    // Animate ig1
    gsap.fromTo(
      ".ig1 img",
      { rotateY: -90, opacity: 0, x: -100 },
      {
        rotateY: 0,
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ig1",
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );

    // Animate ig2
    gsap.fromTo(
      ".ig2 img",
      { rotateY: 90, opacity: 0, x: 100 },
      {
        rotateY: 0,
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ig2",
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );

    // Animate second heading & paragraph
    gsap.fromTo(
      ".textonlyy h2, .textonlyy p",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".textonlyy",
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );
  }, []);

  return (
    <div className="maindiv2">
      <div className="textonly">
        <h2>
          PROJECTS <span className="spann">THAT</span> SPEAKS FOR THEM
          <span className="span">SELVES</span>
        </h2>
        <p>
          Here’s a glimpse of how we’ve helped businesses transform their
          <br /> online presence
        </p>
      </div>

      <div className="imagee">
        <div className="ig1">
          <img src={img2} alt="project1" />
        </div>
        <div className="ig2">
          <img src={img3} alt="project2" />
        </div>
      </div>

      <div className="textonlyy">
        <h2>
          WE ARE THE WEBSITE <span className="spannn">GROWTH PARTNERS</span>
          <br />
          YOU HAVE BEEN <span className="spannn">LOOKING FOR</span>
        </h2>
        <p>
          If you are battling outdated, inefficient or simply unmanageable
          websites, our tailored <br />
          solutions ensure your online presence is not only visually dynamic and
          user-friendly but <br />
          also easy for you or your team to manage.
        </p>
      </div>
    </div>
  );
}
