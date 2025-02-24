"use client";
import image from "../../../public/images/aboutus.png";
import Image from "next/image";
import { motion, spring, useScroll, useTransform } from "framer-motion";

export default function About() {
  const { scrollY } = useScroll();
  const imageEffect = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.5]);
  const textEffect = useTransform(scrollY, [0, 500], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const textScale = useTransform(scrollY, [0, 500], [1, 2]);

  return (
    <div className="about-us">
      <motion.h1
        className="about-us-title"
        style={{ opacity: textOpacity, y: textEffect, scale: textScale }}
      >
        Velora
      </motion.h1>
      <motion.div style={{ opacity: opacity, y: imageEffect, scale: scale }}>
        <Image className="about-us-image" src={image} alt="About Us" />
      </motion.div>
      <div className="moto-wrapper">
        <p className="moto">
          At Velora, fashion isn't just about clothing—it's about confidence,
          expression, and individuality.
        </p>
      </div>
      <div className="about-us-content">
        <motion.div className="box" whileHover={{ scale: 1.03, type: spring }}>
          <p>
            Born from a passion for bold, trend-setting styles, we bring you
            pieces that empower and inspire.
          </p>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.03, type: spring }}>
          <p>
            From chic everyday essentials to statement-making outfits, our
            collections are designed for those who dare to stand out.
          </p>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.03, type: spring }}>
          <p>
            We blend timeless elegance with modern trends, ensuring every piece
            is crafted with quality and a touch of luxury.
          </p>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.03, type: spring }}>
          <p>
            At Velora, we believe that fashion should be fearless—just like you.
            Step into your power, embrace your unique style, and let the world
            be your runway.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
