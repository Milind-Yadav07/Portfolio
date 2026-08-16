import { motion } from 'framer-motion';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-glow-orb footer-glow-right" />

            <div className="footer-content">
                <motion.div 
                    className="footer-left"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="footer-bio">
                        Software Developer with a focus on building high-performance, AI-integrated systems. Proficient in Next.js, Node.js and LangChain to build end-to-end applications that automate workflows and optimize efficiency
                    </p>
                </motion.div>

                <div className="footer-right">
                    <div className="photo-card">
                        <img 
                            src="/layout/MyPhoto.jpg" 
                            alt="Milind Yadav" 
                            className="footer-photo" 
                        />
                        <div className="photo-overlay-glow" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



