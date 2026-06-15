import { useEffect } from 'react';
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion';
import './Cursor.scss';

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Slower and smoother configurations
  const springConfig = { damping: 20, stiffness: 120, mass: 0.5 };
  const followerSpringConfig = { damping: 30, stiffness: 60, mass: 1 };
  const scaleConfig = { damping: 15, stiffness: 100 };

  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const followerX = useSpring(cursorX, followerSpringConfig);
  const followerY = useSpring(cursorY, followerSpringConfig);

  const targetScale = useMotionValue(1);
  const targetFollowerScale = useMotionValue(1);

  const scale = useSpring(targetScale, scaleConfig);
  const followerScale = useSpring(targetFollowerScale, scaleConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      if (window.innerWidth <= 767) return;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (window.innerWidth <= 767) return;
      if (e.target.closest('a, button, .link, input, textarea')) {
        targetScale.set(0.5);
        targetFollowerScale.set(3);
      }
    };

    const handleMouseOut = (e) => {
      if (window.innerWidth <= 767) return;
      if (e.target.closest('a, button, .link, input, textarea')) {
        targetScale.set(1);
        targetFollowerScale.set(1);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, targetScale, targetFollowerScale]);

  return (
    <>
      <Motion.div
        className="cursor"
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
          scale: scale
        }}
      />
      <Motion.div
        className="cursor-follower"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
          scale: followerScale
        }}
      />
    </>
  );
};

export default Cursor;