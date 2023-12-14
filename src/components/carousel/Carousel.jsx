import React, { useRef, useState, useEffect } from 'react';
import { NextIcon } from './NextIcon';
import { BackIcon } from './BackIcon';
import {
  ContainerCarousel,
  CarouselBtn,
  ContainerCardsCarousel,
} from './CarouselStyles';

export function Carousel({ children }) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 5;

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0); // Reiniciar el índice al cambiar el tamaño de la ventana
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const cardWidth = carouselRef.current
      ? carouselRef.current.children[0].clientWidth
      : 0;

    const totalCards = children.length;
    const maxIndex = totalCards - cardsToShow;

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, children, cardsToShow]);

  function next() {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow < children.length ? prevIndex + cardsToShow : 0
    );
  }

  function previus() {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsToShow >= 0
        ? prevIndex - cardsToShow
        : children.length - cardsToShow
    );
  }

  return (
    <ContainerCarousel>
      <CarouselBtn
        onClick={() => previus()}
        style={{ position: 'relative', left: '-35px', zIndex: 2 }}
      >
        <BackIcon />
      </CarouselBtn>
      <ContainerCardsCarousel>
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            transform: `translateX(${-currentIndex * (100 / cardsToShow)}%)`,
            transition: 'transform 300ms ease-out',
            gap: '11px',
          }}
        >
          {children.map((child, i) => (
            <div key={i}>{child}</div>
          ))}
        </div>
      </ContainerCardsCarousel>{' '}
      <CarouselBtn
        onClick={() => next()}
        style={{ position: 'relative', right: '46px', zIndex: 2 }}
      >
        <NextIcon />
      </CarouselBtn>
    </ContainerCarousel>
  );
}
