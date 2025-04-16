import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <h1>Benvenuti a Ristorante Deluxe</h1>
        <p>Un'esperienza gastronomica unica sul mare di Castiglioncello.</p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/booking" className="btn-primary">Plateform Prenotazioni</Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
