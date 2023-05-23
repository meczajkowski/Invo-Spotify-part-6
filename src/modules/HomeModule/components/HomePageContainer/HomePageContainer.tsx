import React, { ReactNode } from 'react';
import './HomePageContainer.scss';

interface Props {
  children: ReactNode;
}

export const HomePageContainer: React.FC<Props> = ({ children }) => {
  return <div className='home-page__container'>{children}</div>;
};
