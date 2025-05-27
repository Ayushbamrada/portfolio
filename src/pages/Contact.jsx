import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Client Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-white rounded-xl p-6 text-gray-800 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
         <form
  action="https://formspree.io/f/meoavrzo"
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
    required
  />
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email Address"
    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
    required
  />
  <textarea
    name="message"
    placeholder="Your Query..."
    rows="4"
    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
    required
  ></textarea>
  <button
    type="submit"
    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
  >
    Submit
  </button>
</form>

        </motion.div>

        {/* Your Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-gray-800 rounded-xl p-6 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">My Information</h3>
          <ul className="space-y-3 text-lg">
            <li><strong>Name:</strong> Ayush Bamrada</li>
            <li><strong>Phone:</strong> +91 9045463283</li>
            <li><strong>Email:</strong> bamradaayush@gmail.com</li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/ayushbamrada/" target="_blank" className="text-blue-400 hover:underline">
                ayushbamrada
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Ayushbamrada" target="_blank" className="text-blue-400 hover:underline">
                Ayushbamrada
              </a>
            </li>
          </ul>

          {/* Hire Me and Resume Options */}
          <div className="mt-8 space-y-4">
           <a
  href="mailto:bamradaayush@gmail.com?subject=Interested%20in%20Hiring%20You%20for%20Your%20Skills%20and%20Projects&body=Dear%20Ayush%20Bamrada,%0A%0A%20I%20hope%20this%20message%20finds%20you%20well.%0A%0A%20I%20recently%20came%20across%20your%20profile%20and%20was%20thoroughly%20impressed%20by%20your%20qualifications,%20projects,%20and%20the%20skills%20you%20have%20developed%20over%20the%20years.%20Your%20experience%20in%20full-stack%20development,%20mobile%20applications,%20and%20your%20proficiency%20in%20languages%20like%20Java,%20Python,%20JavaScript,%20and%20C%20really%20stood%20out%20to%20me.%0A%0A%20In%20particular,%20I%20was%20captivated%20by%20your%20work%20with%20React,%20React%20Native%20(CLI),%20Node.js,%20and%20Express.%20Your%20ability%20to%20build%20real-world%20applications%20from%20scratch%20is%20truly%20remarkable.%20I%20also%20appreciate%20your%20commitment%20to%20building%20intuitive%20and%20high-performance%20applications.%0A%0A%20Given%20your%20expertise%20and%20the%20impressive%20projects%20you%20have%20worked%20on,%20I%20would%20love%20to%20explore%20the%20possibility%20of%20bringing%20you%20on%20board%20for%20a%20role%20within%20our%20organization.%20We%20are%20currently%20seeking%20someone%20with%20your%20skillset,%20and%20I%20believe%20your%20contribution%20would%20be%20invaluable%20to%20our%20team.%0A%0A%20Please%20let%20me%20know%20if%20you're%20open%20to%20a%20conversation%20about%20potential%20opportunities%20with%20us.%20I%20would%20be%20happy%20to%20provide%20further%20details%20about%20the%20role%20and%20the%20projects%20we%20have%20in%20the%20pipeline.%0A%0A%20Looking%20forward%20to%20hearing%20from%20you%20soon.%0A%0A%20Best%20regards,%20%0A%5BYour%20Name%5D%20%0A%5BYour%20Position%5D%20%0A%5BCompany%20Name%5D%20%0A%5BContact%20Information%5D%20%0A"
              className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 border-2 border-transparent hover:border-blue-500 hover:text-white px-6 py-3 rounded-lg transition duration-300"
            >
              <span>Hire Me</span>
            </a>

            <a
              href="/src/assets/media/Ayush%20Updated%20Resume.pdf" // Replace with your resume path
              download
              className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 border-2 border-transparent hover:border-yellow-500 hover:text-white px-6 py-3 rounded-lg transition duration-300"
            >
              <HiDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;