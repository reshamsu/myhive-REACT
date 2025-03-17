import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20 md:py-32 px-4">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-thin mb-8 text-gray-800">
          About <span className="font-bold">Us</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
        myhive is a cutting-edge business tech company leading the way in
          innovation. Our AI-powered, licensed merchant platform automates,
          integrates, and optimizes operations across departments, ensuring
          businesses thrive in the digital age. Whether you're a startup, SMB,
          or enterprise, myhive equips you with the tools to scale seamlessly and
          securely.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSection;
