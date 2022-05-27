import React from 'react';
import { HomePage } from './HomePage.component';
import { useHomePageState } from './useHomePageState';

export const HomePageContainer = React.memo(() => {
  const state = useHomePageState();
  return <HomePage {...state} />;
});
HomePageContainer.displayName = 'HomePageContainer';
