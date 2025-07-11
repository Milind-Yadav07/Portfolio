import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cursor.scss';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 767) {
      // Hide cursor and follower on non-desktop devices
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      if (followerRef.current) followerRef.current.style.display = 'none';
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const updateCursor = () => {
      gsap.to(cursor, { duration: 0.1, x: mouse.x, y: mouse.y, ease: 'power3.out' });
      gsap.to(follower, { duration: 0.3, x: mouse.x, y: mouse.y, ease: 'power3.out' });
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      updateCursor();
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.3, ease: 'power3.out' });
      gsap.to(follower, { scale: 3, duration: 0.3, ease: 'power3.out' });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power3.out' });
      gsap.to(follower, { scale: 1, duration: 0.3, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Attach hover listeners to elements with class 'link'
    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Initially hide cursor and follower, then show
    gsap.set([cursor, follower], { autoAlpha: 1 });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
};

export default Cursor;