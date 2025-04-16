import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import './Booking.css';

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    persons: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui potresti integrare una chiamata API per inviare i dati
    console.log("Prenotazione inviata:", form);
    alert('Prenotazione inviata! Ti contatteremo al più presto.');
    setForm({ name: '', email: '', date: '', time: '', persons: '' });
  };

  return (
    <>
      <Navbar />
      <section className="booking-page container">
        <h2>Prenota il tuo tavolo</h2>
        <motion.form 
          className="booking-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <label>
            Nome:
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Data:
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
          </label>
          <label>
            Orario:
            <input type="time" name="time" value={form.time} onChange={handleChange} required />
          </label>
          <label>
            Numero di persone:
            <input type="number" name="persons" value={form.persons} onChange={handleChange} required />
          </label>
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-submit"
          >
            Invia Prenotazione
          </motion.button>
        </motion.form>
      </section>
    </>
  );
};

export default Booking;
