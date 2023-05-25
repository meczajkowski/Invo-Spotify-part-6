import React from 'react';
import './HomePageContainer.scss';

import { IContainer } from '../../interfaces/IContainer';

export const HomePageContainer: React.FC<IContainer> = ({ children }) => {
  return <div className='home-page__container'>{children}</div>;
};
