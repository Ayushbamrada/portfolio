import React from 'react';
import { motion } from 'framer-motion';

const text = "© 2025 Ayush Bamrada. All rights reserved.";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="text-center py-6 bg-gray-900 text-white mt-10"
    >
      <motion.p
        className="text-sm md:text-base tracking-wide text-gray-300 flex justify-center flex-wrap"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </motion.footer>
  );
};

export default Footer;