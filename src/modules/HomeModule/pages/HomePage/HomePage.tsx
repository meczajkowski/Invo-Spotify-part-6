import React, { useState } from 'react';
import { HeroImage } from '../../components/HeroImage/HeroImage';
import { HomePageContainer } from '../../components/HomePageContainer/HomePageContainer';
import { SimpleForm } from '../../components/SimpleForm/SimpleForm';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <SimpleForm />
      <HeroImage />
    </HomePageContainer>
  );
};
