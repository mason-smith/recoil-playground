import React, { memo, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import moment from 'moment';

// @material-ui dependencies
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

// Local Dependencies
import { currentWeatherQuery } from '../selectors';
import classes from './WeatherDisplay.module.css';
import { CurrentWeather } from '../types';

export const WeatherDisplay = memo(() => {
  const currentWeather: CurrentWeather = useRecoilValue(currentWeatherQuery);

  useEffect(() => {
    console.log('currentWeather', currentWeather);
  }, [currentWeather]);

  return (
    <>
      {currentWeather ? (
        <>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
                style={{ backgroundColor: '#e3f2fd' }}
              />
            }
            title={`${currentWeather.name} - ${currentWeather.main.temp} °F`}
            subheader={moment()
              .utc(currentWeather.dt as any)
              .format('Do MMM YYYY')}
          />

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div className={classes.item}>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  gutterBottom
                >
                  Feels like: {currentWeather.main.feels_like} °F
                </Typography>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={classes.item}>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
              </div>
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography align="center">No Weather to display</Typography>
      )}
    </>
  );
});
