import { useRef, useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import './Contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setLoading(false);
        setSuccessMessage('Message sent successfully!');
        e.target.reset();
      }, () => {
        setLoading(false);
        setErrorMessage('Failed to send message. Please try again later.');
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Motion.div
        className="contact-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="contact-title-area">
          <Motion.p className="contact-subheading" variants={itemVariants}>CONTACT</Motion.p>
          <Motion.h2 className="contact-heading" variants={itemVariants}>Contact</Motion.h2>
          <Motion.p className="contact-description" variants={itemVariants}>Let's connect and work together</Motion.p>
        </div>
        <Motion.form
          className="contact-form"
          ref={formRef}
          onSubmit={sendEmail}
          variants={itemVariants}
        >
          <Motion.input
            type="text"
            name="from_name"
            placeholder="Name"
            className="contact-input"
            required
            variants={itemVariants}
          />
          <Motion.input
            type="email"
            name="from_email"
            placeholder="Email"
            className="contact-input"
            required
            variants={itemVariants}
          />
          <Motion.textarea
            name="message"
            placeholder="Message"
            className="contact-textarea"
            required
            variants={itemVariants}
          />
          <Motion.button
            type="submit"
            className="contact-button"
            disabled={loading}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Sending...' : 'Send'}
          </Motion.button>
        </Motion.form>
        <AnimatePresence>
          {(successMessage || errorMessage) && (
            <Motion.div
              className={`contact-popup ${successMessage ? 'success' : 'error'}`}
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            >
              <div className="popup-content">
                {successMessage ? (
                  <svg className="popup-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="popup-icon error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <p>{successMessage || errorMessage}</p>
                <button className="popup-close" onClick={() => { setSuccessMessage(''); setErrorMessage(''); }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.div>
    </section>
  );
};

export default Contact;
