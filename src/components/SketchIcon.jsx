import { motion } from "framer-motion";

const SketchIcon = ({ pathData, width = 80, height = 80 }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 2, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  };

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.1 }}
    >
      <motion.path
        d={pathData}
        stroke="#4F46E5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={draw}
      />
    </motion.svg>
  );
};

export default SketchIcon;