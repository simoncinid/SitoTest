import { motion } from 'framer-motion';
import './GalleryItem.css';

const GalleryItem = ({ image, altText }) => {
  return (
    <motion.div 
      className="gallery-item"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={altText} />
    </motion.div>
  );
};

export default GalleryItem;
