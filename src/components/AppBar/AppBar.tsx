import { Link } from 'react-router-dom';
import { Anchor, Box, ColorScheme, Title } from '@mantine/core';
import type { AppRoute } from '../../routes/routes.types';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Connect } from '../Connect/Connect';

type AppBarRoute = Pick<AppRoute, 'to' | 'name'>;

interface AppBarProps {
  routes: AppBarRoute[];
  currentRoute?: AppBarRoute;
  currentColorScheme: ColorScheme;
  setColorScheme: (value?: ColorScheme) => void;
}

export const AppBar: React.FC<AppBarProps> = ({ routes, currentRoute, currentColorScheme, setColorScheme }) => (
  <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Title order={1}>MoonSave 🌚</Title>
      <Box sx={{ marginInline: '2rem' }}>
        {routes.map(({ name, to }) => (
          <Anchor component={Link} to={to} key={to} sx={{ marginInline: '0.5rem' }}>
            {name}
          </Anchor>
        ))}
      </Box>
    </Box>
    <Box>
      <Connect />
      <ThemeToggle currentColorScheme={currentColorScheme} setColorScheme={setColorScheme} />
    </Box>
  </Box>
);
AppBar.displayName = 'AppBar';
