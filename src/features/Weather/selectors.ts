import { selector } from 'recoil';
import axios from 'axios';
import { currentWeatherLocationState } from './atoms';
import { CurrentWeather } from './types';

export const currentWeatherQuery = selector({
  key: 'CurrentWeather',
  get: async ({ get }) => {
    const {
      city,
      state: { code },
    } = get(currentWeatherLocationState);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${code},US&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    if (city) {
      try {
        const { data } = await axios.get(url);

        return data as CurrentWeather;
      } catch (error) {
        return error;
      }
    }
  },
});
