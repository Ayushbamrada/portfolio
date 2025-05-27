import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <section
      id="about"
      className="min-h-screen w-full pt-32 px-6 pb-20 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 drop-shadow-lg"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={
          scrollDirection === 'down'
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 60 }
        }
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-lg md:text-xl leading-relaxed max-w-4xl text-center text-gray-300 px-4"
      >
        I’m <span className="font-semibold text-blue-400">Ayush Bamrada</span>, currently in my <span className="text-teal-400 font-medium">final semester of Master of Computer Application (MCA)</span>. Over the years, I've developed strong skills in <span className="text-yellow-400 font-semibold">developing and maintaining software applications</span>, and I’m driven by a deep passion for building meaningful digital products.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={
          scrollDirection === 'down'
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 60 }
        }
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="text-lg md:text-xl leading-relaxed max-w-4xl text-center text-gray-400 px-4 mt-6"
      >
        I’m proficient in multiple programming languages including <span className="text-purple-400 font-medium">Java, Python, JavaScript, and C</span>. I also work with modern frameworks and libraries like <span className="text-green-400 font-semibold">React, React Native (CLI), Node.js, and Express</span>.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={
          scrollDirection === 'down'
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 60 }
        }
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        className="text-lg md:text-xl leading-relaxed max-w-4xl text-center text-gray-400 px-4 mt-6"
      >
        I’ve built <span className="text-yellow-400 font-semibold">three real-world mobile applications</span> from scratch and developed the complete frontend for each. I also have experience building <span className="text-yellow-400 font-semibold">two websites</span>, leveraging my full-stack development expertise.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={
          scrollDirection === 'down'
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 60 }
        }
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
        className="text-lg md:text-xl leading-relaxed max-w-4xl text-center text-gray-400 px-4 mt-6"
      >
        My passion lies in building <span className="text-pink-400 font-semibold">intuitive</span>, <span className="text-blue-400 font-semibold">high-performance</span> applications that provide <span className="text-teal-300 font-semibold">seamless user experiences</span>. Whether it's <span className="text-green-300 font-semibold">mobile</span> or <span className="text-indigo-300 font-semibold">web development</span>, I thrive on <span className="text-orange-300 font-semibold">problem-solving</span> and crafting <span className="text-red-400 font-semibold">impactful solutions</span>.
      </motion.p>
    </section>
  );
};

export default About;