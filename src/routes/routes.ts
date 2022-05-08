import { HomePageContainer } from '../pages/HomePage/HomePage.container';
import { TransactionsPageContainer } from '../pages/TransactionsPage/TransactionsPage.container';
import { AppRoute } from './routes.types';

export const appRoutes = [
  {
    to: '/home',
    name: 'Home',
    component: HomePageContainer,
  },
  {
    to: '/transactions',
    name: 'Transactions',
    component: TransactionsPageContainer,
  },
];

export const toAppBarRoute = (appRoute: AppRoute): Pick<AppRoute, 'to' | 'name'> => ({
  to: appRoute.to,
  name: appRoute.name,
});
