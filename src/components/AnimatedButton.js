import { motion } from 'framer-motion';
import './AnimatedButton.css';

const AnimatedButton = ({ text, onClick }) => {
  return (
    <motion.button 
      className="animated-button"
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
