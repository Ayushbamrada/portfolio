import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/media/Snapchat-302904348.jpg"

const HeroSection = () => {
    useEffect(() => {
        setTimeout(() => {
            if ("vibrate" in navigator) {
                navigator.vibrate(100);
            }
        }, 1800);
    }, []);

    return (
        <section className="text-center py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center gap-8 px-4 relative overflow-hidden">

            {/* Glowing Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[100px] rounded-full"></div>

            {/* Animated Profile Shadow */}
            <motion.div
                className="w-44 h-5 rounded-full bg-black/40 blur-md absolute top-[6.2rem]"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ delay: 1.6, duration: 0.4, ease: "easeOut" }}
            />

            {/* Bouncing & Rotating Profile Image */}
            <motion.img
                src={ProfileImage}
                alt="Profile"
                className="w-44 h-44 rounded-full border-[6px] border-white shadow-2xl ring-4 ring-blue-500 ring-opacity-30 hover:ring-opacity-100 transition-all duration-500"
                initial={{ y: -300, rotate: -10, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.8, duration: 2.4 }}
            />

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.4, ease: "easeOut" }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 animate-gradient">
                    Hi, I'm Ayush Bamrada<span className="animate-waving-hand inline-block"></span>
                </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.8, ease: "easeOut" }}
            >
                <p className="text-xl md:text-2xl mb-6 text-gray-300">
                    🚀 Front-End Developer | React, React Native & Node.js Enthusiast
                </p>
            </motion.div>

            {/* Call-to-Action Button */}
            <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.4, ease: "easeOut" }}
                className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:from-pink-500 hover:to-blue-500"
            >
                🔥 View Projects
            </motion.a>
        </section>
    );
};

export default HeroSection;