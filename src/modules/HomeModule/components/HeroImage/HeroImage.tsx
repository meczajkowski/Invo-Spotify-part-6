import React from 'react';
import './HeroImage.scss';
import hero from './../../../../assets/images/hero.jpg';

export const HeroImage: React.FC = () => {
  return (
    <div className='hero-image-container'>
      <img className='hero-image img--cover' src={hero} alt='hero image' />
    </div>
  );
};
