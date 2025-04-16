import { motion } from 'framer-motion';
import './MenuCard.css';

const MenuCard = ({ image, title, description, price }) => {
  return (
    <motion.div 
      className="menu-card"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="price">{price} €</span>
      </div>
    </motion.div>
  );
};

export default MenuCard;
