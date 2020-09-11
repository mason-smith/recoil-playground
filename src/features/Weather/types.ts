interface Main {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

interface Sys {
  type: string;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    icon: string;
    description: string;
  }[];
  base: string;
  main: Main;
  wind: {
    deg: number;
    speed: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  rain: {
    '1h': number;
    '3h': number;
  };
  snow: {
    '1h': number;
    '3h': number;
  };
  dt: number;
  sys: Sys;
  name: string;
}
