import { ColorScheme, Container } from '@mantine/core';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { appRoutes, toAppBarRoute } from './routes/routes';
import { AppBar } from './components/AppBar/AppBar';

const App = () => {
  const location = useLocation();
  const AppBarRoutes = appRoutes.map(toAppBarRoute);
  const currentRoute = appRoutes.find((someRoute) => someRoute.to === location.pathname);

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <Container
      sx={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '1rem', height: '100vh', paddingBlock: '2rem' }}
    >
      <AppBar
        routes={AppBarRoutes}
        currentRoute={currentRoute}
        currentColorScheme={colorScheme}
        setColorScheme={toggleColorScheme}
      />
      <Outlet />
    </Container>
  );
};

export default App;
