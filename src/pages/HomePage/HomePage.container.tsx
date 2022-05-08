import React from 'react';
import { HomePage } from './HomePage.component';

export const HomePageContainer = React.memo(() => {
  return <HomePage />;
});
HomePageContainer.displayName = 'HomePageContainer';
