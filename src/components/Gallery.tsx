import { useState, useEffect } from 'react';

const Gallery = () => {
  const items = [
    {
      id: '1',
      src: '/api/placeholder/1920/800',
      alt: 'Mountain landscape',
    },
    {
      id: '2',
      src: '/api/placeholder/1920/800',
      alt: 'Urban architecture',
    },
    {
      id: '3',
      src: '/api/placeholder/1920/800',
      alt: 'Beach sunset',
    },
    {
      id: '4',
      src: '/api/placeholder/1920/800',
      alt: 'Forest path',
    },
    {
      id: '5',
      src: '/api/placeholder/1920/800',
      alt: 'City nightlife',
    },
    {
      id: '6',
      src: '/api/placeholder/1920/800',
      alt: 'Desert dunes',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => 
        prev === items.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '90vw',
        height: '600px',
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
      }}>
        <img
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;