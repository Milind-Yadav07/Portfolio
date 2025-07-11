import React, { useEffect, useRef, useState } from 'react';
import './Contact.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.contact-wrapper',
          start: '150px bottom',
          end: 'center center',
          scrub: 0,
        },
      });

      tl.fromTo(
        '.staggered-reveal',
        { opacity: 0 },
        { opacity: 1, duration: 2, stagger: 2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs.sendForm('service_qmj5tll', 'template_vhjxinc', formRef.current, 'j9IxET4cQn9kTuNRJ')
      .then((result) => {
        setLoading(false);
        setSuccessMessage('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        setLoading(false);
        setErrorMessage('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-wrapper">
        <div className="contact-title-area staggered-reveal">
          <p className="contact-subheading staggered-reveal">CONTACT</p>
          <h2 className="contact-heading staggered-reveal">Contact</h2>
          <p className="contact-description staggered-reveal">Let's connect and work together</p>
        </div>
        <form className="contact-form staggered-reveal" ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" className="contact-input staggered-reveal" required />
          <input type="email" name="from_email" placeholder="Email" className="contact-input staggered-reveal" required />
          <textarea name="message" placeholder="Message" className="contact-textarea staggered-reveal" required />
          <button type="submit" className="contact-button staggered-reveal" disabled={loading}>
            {loading ? 'Sending...' : 'Send →'}
          </button>
        </form>
        {successMessage && <p className="contact-success-message">{successMessage}</p>}
        {errorMessage && <p className="contact-error-message">{errorMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
