import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 Import Link

const name = "Ayush Bamrada";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" }, // 👈 Use route for Contact
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.07,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Animated Name */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-xl font-bold flex gap-0"
                >
                    {name.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            variants={letterVariants}
                            className={char === " " ? "w-2" : ""}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ y: -5, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {item.label === "Contact" ? (
                                <Link
                                    to={item.href}
                                    className="hover:text-blue-400 transition duration-300 text-lg font-medium"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    href={item.href}
                                    className="hover:text-blue-400 transition duration-300 text-lg font-medium"
                                >
                                    {item.label}
                                </a>
                            )}
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center gap-6 py-4 bg-gray-800">
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={index}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            {item.label === "Contact" ? (
                                <Link
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-blue-400 transition"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-blue-400 transition"
                                >
                                    {item.label}
                                </a>
                            )}
                        </motion.li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;