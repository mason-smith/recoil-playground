import { atom } from 'recoil';

// Local Dependencies
import { states } from 'src/data/states';

export const currentWeatherLocationState = atom({
  key: 'CurrentWeatherLocation',
  default: { city: '', state: states[6] },
});
