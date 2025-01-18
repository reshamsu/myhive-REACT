import { motion } from "framer-motion";

const CoreValues: React.FC = () => {
  const values = [
    {
      title: "Innovation",
      description: "We strive to be at the forefront of technology.",
    },
    {
      title: "Security",
      description: "Safeguarding sensitive data and transactions.",
    },
    {
      title: "Efficiency",
      description: "Streamlining processes to save time and reduce errors.",
    },
    {
      title: "Scalability",
      description: "Growing with your business needs.",
    },
    {
      title: "Trust",
      description: "Building reliable and transparent partnerships.",
    },
  ];

  return (
    <div className="bg-gray-100 py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-thin mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Core <span className="font-bold">Values</span>
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-left transition-all duration-300 hover:bg-yellow-500 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-2xl font-light text-yellow-500 group-hover:text-gray-800 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 group-hover:text-gray-800">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
