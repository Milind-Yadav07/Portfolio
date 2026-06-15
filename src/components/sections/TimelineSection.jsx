import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionTemplate, useTransform, useMotionValueEvent } from 'framer-motion';
import './TimelineSection.scss';
import { TIMELINE_DATA } from '@/data/timelineData';

const TimelineItem = ({ item, index, activeImage, setActiveImage }) => {
    const connectorRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: connectorRef,
        offset: ["start center", "end center"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0) {
            if (activeImage !== item.img) {
                setActiveImage(item.img);
            }
        } else if (index === 0 && latest <= 0) {
            if (activeImage !== null) {
                setActiveImage(null);
            }
        }
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const fillPercent = useTransform(scaleY, [0, 1], [0, 100]);
    const background = useMotionTemplate`linear-gradient(to bottom, #007bff ${fillPercent}%, #ffffff ${fillPercent}%)`;

    return (
        <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 + (index * 0.05) }}
        >
            <div className="timeline-left">
                <motion.div
                    className="timeline-dot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.2 }}
                />
                <div className="timeline-connector-wrapper" ref={connectorRef}>
                    <motion.div
                        className="timeline-connector"
                        style={{ background }}
                    />
                </div>
            </div>

            <div className="timeline-content">
                <h2 className="title">{item.description}</h2>

                <ul className="details">
                    {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const TimelineSection = () => {
    const [activeImage, setActiveImage] = useState(null);

    return (
        <section className="timeline-section" id="timelineSection">
            <motion.span
                className="section-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                MILESTONES
            </motion.span>

            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Timeline
            </motion.h2>

            <motion.p
                className="section-subtitle-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                A quick recap of proud moments
            </motion.p>

            <div className="timeline-layout">
                <div className="timeline-container">
                    <div className="timeline-items">
                        {TIMELINE_DATA.map((item, index) => (
                            <TimelineItem
                                key={index}
                                item={item}
                                index={index}
                                activeImage={activeImage}
                                setActiveImage={setActiveImage}
                            />
                        ))}
                    </div>
                </div>
                <div className="timeline-image-container">
                    <div className="timeline-sticky-wrapper">
                        {TIMELINE_DATA.map((item) => {
                            const isActive = activeImage === item.img;
                            return (
                                <motion.img
                                    key={item.img}
                                    src={item.img}
                                    alt={item.description}
                                    className="timeline-img"
                                    style={{
                                        position: 'absolute',
                                        pointerEvents: isActive ? 'auto' : 'none',
                                    }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        scale: isActive ? 1 : 0.95,
                                        zIndex: isActive ? 10 : 0
                                    }}
                                    transition={{ duration: 0.4 }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
