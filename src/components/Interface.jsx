import { motion } from "framer-motion";

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
        I want to make and provide
        <br />
        3D Virtual Avatar Chatbots
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
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 75,
  },
  {
    title: "Nodejs",
    level: 75,
  },
  {
    title: "JavaScript",
    level: 60,
  },
  {
    title: "Python",
    level: 60,
  },
];

const designSkills = [
  { title: "3D Modeling (Blender)", level: 40 },
  { title: "FBX / GLTF Animation", level: 85 },
  { title: "UI/UX Design", level: 55 },
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
          <h2 className="text-5xl font-bold mt-10">3D / Design Skills</h2>
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
      "An AI-powered chatbot that integrates with restaurant data from Chope’s Top Table, extracting menus and providing smart recommendations.",
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
];

const ProjectsSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold mb-8">Projects</h2>

      <div className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory">
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
      <h2 className="text-5xl font-bold">The Story Behind My Work</h2>

      <motion.p
        className="text-lg text-gray-700 mt-8 max-w-2xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        My journey into creating 3D virtual avatar chatbots and React Three Fiber started during my final year project. 
        Working on that project, I discovered how immersive 3D experiences could make technology 
        more engaging, intuitive, and human-like. That experience sparked my passion for building 
        interactive chatbots that combine creativity, functionality, and technology.
      </motion.p>

      <motion.p
        className="text-lg text-gray-700 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        These chatbots are designed to simplify tasks, provide guidance, and bring ideas 
        to life in a visually compelling environment.
      </motion.p>

      <motion.p
        className="text-lg text-gray-700 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        If you’d like to get in touch with me, feel free to{" "}
        <a
          href="mailto:megacertgt@gmail.com"
          className="text-indigo-600 font-bold ml-1"
        >
          contact me via email
        </a>.
      </motion.p>
    </Section>
  );
};
