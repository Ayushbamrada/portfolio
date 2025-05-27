import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Co-Working Hybrid App",
    description:
      "A hybrid mobile application with two types of users: Normal Users and Property Owners. Normal users can book co-working spaces, while owners can register their properties with rent, facilities, and photos. Includes test-mode payment gateway and multiple screens like Welcome, User Selection, Signup, Login, Dashboards for both roles, Sidebar & Bottom Tab Navigation, Booking, Upcoming/Completed/Cancelled screens, KYC, Profile, Notifications, FAQs, Privacy Policy, and more.",
  },
  {
    id: 2,
    title: "RGRecords - Music Contest App",
    description:
      "RGRecords is a real-world hybrid mobile app with two user types: Normal Users who participate in music contests and Event Owners who publish contest details including fee and venue. App includes screens like Welcome, User Selection, Signup/Login, Dashboard, Bottom Tab Navigation, Notifications, Profile, Event Details, Contest Registration, Personal Details, Education, Professional Info, Post Registration Summary, and Payment Gateway integration.",
  },
];

const Home = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);  // Manage description toggle

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: 60, transition: { duration: 0.4 } },
  };

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <main id="home">
      <HeroSection />

      <section id="projects" className="px-6 py-16 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <ProjectCard
                {...project}
                expanded={expanded}  // Pass expanded state to ProjectCard
                toggleDescription={toggleDescription}  // Pass toggle function to ProjectCard
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;