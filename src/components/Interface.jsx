import { motion } from "framer-motion";
import { useState } from "react";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center
      `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ChatbotWidget />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="px-1 italic text-indigo-600">Joel</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Year 3 Applied Artificial Intelligence Student 
        <br />
        Keen on building innovative AI solutions 
      </motion.p>
      <motion.a
        href="mailto:megacertgt@gmail.com"
        className={`bg-indigo-600 text-white py-4 px-8 
          rounded-lg font-bold text-lg mt-16 inline-block`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Contact me
      </motion.a>
    </Section>
  );
};

const skills = [
  {
    title: "Data Structures & Algorithms",
    level: 80,
  },
  {
    title: "Frontend Development (React.js, HTML, CSS)",
    level: 80,
  },
  {
    title: "Backend Development (Node.js, APIs)",
    level: 75,
  },
  {
    title: "Machine Learning",
    level: 70,
  },
  {
    title: "Deep Learning",
    level: 70,
  },
];

const designSkills= [
  { title: "Natural Language Processing (NLP)", level: 70 },
  { title: "Database Management (SQL / NoSQL)", level: 75 },
  { title: "Software Engineering Principles", level: 80 },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, delay: 1 + index * 0.2 },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: { duration: 1, delay: 1 + index * 0.2 },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 3D / Design Skills */}
        <div>
          <h2 className="text-5xl font-bold mt-10">Core Skills</h2>
          <div className="mt-8 space-y-4">
            {designSkills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 1, delay: 2 + index * 0.2 },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: { duration: 1, delay: 2 + index * 0.2 },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const projects = [
  {
    title: "Restaurant Kiosk Chatbot",
    description:
      "An AI-powered chatbot that integrates with restaurant data from Chope's Top Table, extracting menus and providing smart recommendations.",
    image: "/textures/TopTableChatbot.png",
    link: "https://youtu.be/YOUR_UNLISTED_VIDEO_1",
  },
  {
    title: "Custom Recruitment Website Chatbot",
    description:
      "A virtual assistant solution for recruitment, handling candidate queries, resume submissions, and client interactions efficiently.",
    image: "/textures/peopleprofilerschatbot1.png",
    link: "https://youtu.be/8P-_1oWI4cM",
  },
  {
    title: "Custom Kiosk Style Chatbot",
    description:
      "An immersive 3D storytelling and educational experience, handling questions about my home.",
    image: "/textures/OdysseaChatbot.png",
    link: "https://youtu.be/wO9I7etHYps",
  },
  {
    title: "AI for Advanced Manufacturing",
    description:
      "Unsupervised anomaly detection system predicting machine failures using Isolation Forest and autoencoders. Achieved an F1 score of 0.79 and provided predictive maintenance insights.",
    image: "/textures/AIAMPic.jpg",
    link: "https://portfolio-joel-blond.vercel.app/",
  },
  {
    title: "AI for Cybersecurity",
    description:
      "Supervised learning project to detect phishing emails using feature extraction and classification models. Includes defense strategies aligned with MITRE ATLAS techniques.",
    image: "/textures/AICSPic.jpg",
    link: "https://portfolio-joel-blond.vercel.app/",
  },
  {
    title: "Shoe, Sandal, Boot Classification (Deep Learning)",
    description:
      "Convolutional Neural Network (CNN) project for image classification of shoes, sandals, and boots. Applied data augmentation and optimization techniques for high accuracy.",
    image: "/textures/DLORPic.png",
    link: "https://portfolio-joel-blond.vercel.app/",
  },
  {
    title: "Natural Language Processing (RAG) chatbot",
    description:
      "Developed a conversational AI using RAG for intent recognition and dialogue management. Integrated with a custom knowledge base for accurate responses.",
    image: "/textures/NLPPic.jpg",
    link: "https://portfolio-joel-blond.vercel.app/",
  },
  {
    title: "Car Price Prediction (Machine Learning)",
    description:
      "Deployed a Streamlit web application predicting car prices in India. Implemented data preprocessing, feature engineering, and regression models for interactive predictions.",
    image: "/textures/MLDPPic.jpg",
    link: "https://portfolio-joel-blond.vercel.app/",
  },
  {
    title: "Sustainability Mobile App (Dart)",
    description:
      "Created a mobile app to encourage eco-friendliness, allowing users to buy and sell items. Includes user authentication connected to a database.",
    image: "/textures/MBAPPic.png",
    link: "https://portfolio-joel-blond.vercel.app/",
  },
  {
    title: "Household Item Scanner",
    description:
      "Developed a model using AWS Rekognition, Lambda, S3, and RDS/MySQL to recognize household items. Provides guidance on reusing, reducing, or recycling items, with live detection via camera.",
    image: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
    link: "https://portfolio-joel-blond.vercel.app/",
  },
  {
    title: "Automated Receipt Printer (RPA)",
    description:
      "Created an unattended UiPath robot that collects booking data, writes it into a text file, and sends confirmation emails. Deployed on Orchestrator for scheduled use.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    link: "https://portfolio-joel-blond.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold mb-8">Projects</h2>
      <p className="text-gray-600 mb-4">← Scroll to see all projects →</p>

      <div className="flex space-x-6 overflow-x-scroll pb-4 snap-x snap-mandatory w-full scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 w-80 flex-shrink-0 snap-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: index * 0.3 },
            }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-md mb-4 cursor-pointer 
                           transform transition-transform duration-300 hover:scale-105"
              />
            </a>

            <h3 className="text-2xl font-bold text-indigo-600">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Beyond the Classroom</h2>

      <motion.p
        className="text-lg text-gray-700 mt-8 max-w-2xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        As a member of the Polytechnic Tennis Team (2024/25 - 2025/26), My team earned a Silver medal at the Tennis POL-ITE tournament. 
        This experience taught me discipline, teamwork, and perseverance—qualities essential both on court and in tech.
      </motion.p>

      <motion.p
        className="text-lg text-gray-700 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        In 2024, I had the opportunity to visit Shanghai and explore companies like ENNOVI and Volkswagen. Witnessing their innovative manufacturing 
        and AI applications deepened my passion for building practical, real-world solutions.
      </motion.p>

      <motion.div
        className="flex space-x-6 mt-8 mb-8"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex-1 max-w-md">
          <img
            src="/textures/volkswagenGS.jpg"
            alt="Visit to Volkswagen Shanghai"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <p className="text-center text-gray-600 mt-2 font-semibold">Volkswagen Shanghai</p>
        </div>
        <div className="flex-1 max-w-md">
          <img
            src="/textures/ennoviGS.jpg"
            alt="Visit to ENNOVI Shanghai"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <p className="text-center text-gray-600 mt-2 font-semibold">ENNOVI Shanghai</p>
        </div>
      </motion.div>

      <motion.p
        className="text-lg text-gray-700 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.1 }}
      >
        Through the Community Care Network in 2023, I helped raise funds for those in need. These experiences—from sports 
        to community service—have shaped my values of innovation and social responsibility, which I'm excited to bring to SIT.
      </motion.p>
    </Section>
  );
};

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chatbot iframe popup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={open ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`${
          open ? "pointer-events-auto" : "pointer-events-none"
        } shadow-2xl rounded-2xl overflow-hidden border border-gray-200 bg-white`}
      >
        {open && (
          <iframe
            src={`https://joeltanchatbot.netlify.app/?v=${Date.now()}`}
            title="SUGARBEAR 3D Chatbot"
            className="w-[400px] h-[550px] rounded-2xl"
          />
        )}
      </motion.div>

    </div>
  );
};