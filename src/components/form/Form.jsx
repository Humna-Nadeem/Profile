// import React from 'react'
// import './Form.css'
// export default function Form() {
//   return (
//     <div className='from-bgimg'>
//         <div className='from-text'>
//             <h1>K<span className='from-span'>eep</span> in t<span className='from-span'>ouch</span></h1>
//             <p>Stay connected with us for health tips, clinic updates, and easy appointment
//                  booking — we’re just a <br /> message away!</p>
//                  <div>
//                    <div className='form-input'> <input type="text" placeholder='Your name' /></div>
//                 <div  className='form-input'>    <input type="text" placeholder='Email' /></div>
//                 <div className='input-message'>    <input type="text" placeholder='Message' /></div>
//                     <div className='from-btn'><button>Get a Free Quote</button></div>
//                  </div>
//         </div>
//     </div>
//   )
// }

import React, { useEffect, useRef } from "react";
import "./Fom.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const formRef = useRef(null);
  const inputsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main heading animation
      gsap.from(".from-text h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".from-text h1",
          start: "top 90%",
        },
      });

      // Paragraph fade-in
      gsap.from(".from-text p", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".from-text p",
          start: "top 85%",
        },
      });

      // Stagger animation for inputs
      gsap.from(inputsRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });

      // Button pop-in animation
      gsap.from(".from-btn button", {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".from-btn button",
          start: "top 85%",
        },
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="from-bgimg" ref={formRef}>
      <div className="from-text">
        <h1>
          K<span className="from-span">eep</span> in t
          <span className="from-span">ouch</span>
        </h1>
        <p>
          Stay connected with us for health tips, clinic updates, and easy
          appointment booking — we’re just a <br /> message away!
        </p>
        <div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Your name"
              ref={(el) => inputsRef.current[0] = el}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Email"
              ref={(el) => inputsRef.current[1] = el}
            />
          </div>
          <div className="input-message">
            <input
              type="text"
              placeholder="Message"
              ref={(el) => inputsRef.current[2] = el}
            />
          </div>
          <div className="from-btn">
            <button>Get a Free Quote</button>
          </div>
        </div>
      </div>
    </div>
);
}