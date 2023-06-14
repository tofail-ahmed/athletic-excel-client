import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 Error';
  }, []);

  const animationRef = useRef(null);

  useEffect(() => {
    const animation = anime.timeline({
      easing: 'easeOutElastic',
      duration: 4000,
    });

    animation.add({
      targets: animationRef.current,
      translateY: ['-2em', 0],
      opacity: [0, 1],
      scale: [1, 2.5],
      rotate: [-360, 0],
      color: ['#FF758C', '#FF7EB3'],
      delay: 500,
    });

    animation.add({
      targets: '.not-found__text',
      translateY: ['2em', 0],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(200),
    });
  }, []);

  const styles = {
    notFound: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: 'yellow',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    title: {
      fontSize: '6rem',
      marginBottom: '2rem',
      fontWeight: 'bold',
    },
    text: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.notFound}>
      <h1 style={styles.title} ref={animationRef}>
        404
      </h1>
      <p style={styles.text} className="not-found__text">Page Not Found</p>
      <p style={styles.text} className="not-found__text">Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
