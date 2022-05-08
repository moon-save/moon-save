import React from 'react';

export interface AppRoute {
  to: string;
  name: string;
  component: React.FC;
}
