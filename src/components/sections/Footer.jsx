import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <img src="/patterns/left-pattern.svg" alt="pattern" className="left-pattern" />
            <div className="footer-content">
                <motion.div
                    className="footer-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="social-wrapper">
                        <h2 className="social-heading">My Social <span className="accounts-highlight">Accounts</span></h2>
                        <div className="social-links">
                            <a href="https://github.com/Milind-Yadav07" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/milind-yadav-a89157326" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                            <a href="mailto:milindcs07@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaEnvelope /></a>
                            <a href="https://www.instagram.com/milind_yadav07/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                        </div>
                    </div>
                </motion.div>

                <div className="footer-svg-container">
                    <img src="/layout/footer.svg" alt="Mention-bro" className="footer-svg" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
