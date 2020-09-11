import React from 'react';

// Local Dependencies
import { Todos } from 'src/features/Todos';
import { CharacterCounter } from 'src/features/Counter';
import { Weather } from 'src/features/Weather';
import { Route } from './types';

export const routes: Route[] = [
  {
    component: <Weather />,
    path: '/',
    label: 'Weather',
  },
  { component: <Todos />, path: '/todos', label: 'Todos' },
  {
    component: <CharacterCounter />,
    path: '/character-counter',
    label: 'Character Count',
  },
];
