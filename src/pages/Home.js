import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="container">
        <h2>Il nostro Ristorante</h2>
        <p>
          Situato in riva al mare di Castiglioncello, Ristorante Deluxe offre un'esperienza gastronomica senza paragoni.
          Gustate i nostri piatti unici, preparati con ingredienti freschi e di alta qualità, mentre godete la vista mozzafiato sul Mediterraneo.
        </p>
      </section>
    </>
  );
};

export default Home;
