import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './Collaboration.scss';

gsap.registerPlugin(ScrollTrigger);

const Collaboration = () => {
  const firstLineRef = useRef(null);
  const headingRef = useRef(null);
  const thirdLineRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isSmall: "(max-width: 768px)",
        isLarge: "(min-width: 769px)",
      },
      (context) => {
        const { isSmall } = context.conditions;

        // Fade in main heading on scroll
        gsap.fromTo(
          headingRef.current,
          { autoAlpha: 0, z: 50 },
          {
            autoAlpha: 1,
            z: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate main heading text color gradient from left to right on scroll
        gsap.to(headingRef.current, {
          backgroundPosition: "100% 0%",
          ease: "none",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        });

        const slideDistance = isSmall ? 100 : 300;

        // Animate first line sliding right to left
        gsap.fromTo(
          firstLineRef.current,
          { x: 0 },
          {
            x: slideDistance,
            ease: "none",
            scrollTrigger: {
              trigger: firstLineRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        // Animate third line sliding left to right
        gsap.fromTo(
          thirdLineRef.current,
          { x: 0 },
          {
            x: -slideDistance,
            ease: "none",
            scrollTrigger: {
              trigger: thirdLineRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const firstLineText = "Data Structure Software Engineering Software Architecture ";
  const thirdLineText = "Agile Development Frontend Development Problem Solving";

  return (
    <section className="collaboration-section">
      <div className="background-text first-line" ref={firstLineRef} aria-hidden="true">
        {firstLineText}
      </div>

      <h2 className="main-heading" ref={headingRef}>
        Interested in Collaboration?
      </h2>

      <div className="background-text third-line" ref={thirdLineRef} aria-hidden="true">
        {thirdLineText}
      </div>
    </section>
  );
};

export default Collaboration;
