import Navbar from '../components/Navbar';
import MenuCard from '../components/MenuCard';
import { motion } from 'framer-motion';
import './Menu.css'; // Puoi creare stili specifici per la pagina

const dishes = [
  {
    id: 1,
    image: '/assets/piatto1.jpg',
    title: 'Spaghetti alle Vongole',
    description: 'Un classico della cucina di mare, preparato con vongole fresche.',
    price: '18,00'
  },
  {
    id: 2,
    image: '/assets/piatto2.jpg',
    title: 'Risotto al Limone e Gamberi',
    description: 'Un risotto cremoso con sapori freschi e agrumati.',
    price: '21,00'
  },
  {
    id: 3,
    image: '/assets/piatto3.jpg',
    title: 'Pesce alla Griglia',
    description: 'Pesce locale grigliato alla perfezione, con contorni di verdure.',
    price: '25,00'
  },
  // Aggiungi altri piatti...
];

const Menu = () => {
  return (
    <>
      <Navbar />
      <section className="menu-page container">
        <h2>Il Nostro Menu</h2>
        <motion.div 
          className="menu-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {dishes.map(dish => (
            <MenuCard 
              key={dish.id}
              image={dish.image}
              title={dish.title}
              description={dish.description}
              price={dish.price}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Menu;
