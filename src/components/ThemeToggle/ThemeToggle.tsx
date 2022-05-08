import { ColorScheme, Switch } from '@mantine/core';
import React from 'react';

interface ThemeToggleProps {
  currentColorScheme: ColorScheme;
  setColorScheme: (value?: ColorScheme) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentColorScheme, setColorScheme }) => {
  return (
    <Switch
      checked={currentColorScheme === 'light'}
      onChange={(e) => setColorScheme(e.currentTarget.checked ? 'light' : 'dark')}
    />
  );
};
ThemeToggle.displayName = 'ThemeToggle';
