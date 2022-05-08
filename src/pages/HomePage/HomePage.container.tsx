import React from 'react';
import { HomePage, HomePageProps } from './HomePage.component';

export const HomePageContainer = React.memo(() => {
  const homePageProps: HomePageProps = {
    myETHBalance: 3.3722,
    balanceDelta: 523.23,
    myOddsToWin: 0.6712,
  };
  return <HomePage {...homePageProps} />;
});
HomePageContainer.displayName = 'HomePageContainer';
