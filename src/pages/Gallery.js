import Navbar from '../components/Navbar';
import GalleryItem from '../components/GalleryItem';
import './Gallery.css';

const images = [
  { id: 1, src: '/assets/gallery1.jpg', alt: 'Vista del mare' },
  { id: 2, src: '/assets/gallery2.jpg', alt: 'Interno elegante del ristorante' },
  { id: 3, src: '/assets/gallery3.jpg', alt: 'Dettaglio di un piatto gourmet' },
  { id: 4, src: '/assets/gallery4.jpg', alt: 'Atmosfera romantica al tramonto' },
  // Aggiungi altre immagini...
];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <section className="gallery-page container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {images.map(img => (
            <GalleryItem key={img.id} image={img.src} altText={img.alt} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
