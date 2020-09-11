import React, { useState, FormEvent, Suspense } from 'react';

// @material-ui dependencies
import Container from '@material-ui/core/Container';

// Local Dependencies
import classes from './Weather.module.css';
import { LocationSelects } from './components/LocationSelects';
import { states, State } from 'src/data/states';

import { WeatherDisplay } from './components/WeatherDisplay';
import { useSetRecoilState } from 'recoil';
import { currentWeatherLocationState } from './atoms';

export const Weather = () => {
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState<State>(states[6]);

  const setLocationData = useSetRecoilState(currentWeatherLocationState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const location = { city, state: stateVal };
    setLocationData(location);
  };

  const selectProps = { city, setCity, stateVal, setStateVal };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.inputs}>
        <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
          <LocationSelects {...selectProps} />
        </form>
      </div>
      <div className={classes.weatherDisplay}>
        <Suspense fallback={<div>Loading...</div>}>
          <WeatherDisplay />
        </Suspense>
      </div>
    </Container>
  );
};
