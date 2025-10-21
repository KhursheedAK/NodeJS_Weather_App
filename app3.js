// Without Yargs
import request from 'postman-request';
import dotenv from 'dotenv';
dotenv.config();

const weatherStack_API = process.env.weatherStack_API;

const getWeatherData = (query, units, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=${weatherStack_API}&query=${query}&units=${units}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(
        'Failed to fetch weather data! Check your internet Connection...',
        undefined,
      );
    } else if (response.body.error) {
      const { code, type, info } = response.body.error;
      callback(`Error Code: ${code},  ${type}, ${info}`, undefined);
    } else {
      const { name, region, country, lat, lon } = response.body.location;

      /* 2 ways of destrucring array from an object */
      /* (A)
           const {
           weather_descriptions: [description],
           } = response.body.current;
      */
      /* (B) */
      const { weather_descriptions } = response.body.current;
      const [description] = weather_descriptions;

      const { temperature, feelslike } = response.body.current;
      callback(undefined, response.body);
      /*End */

      const tempUnit =
        units === 'm' ? '°C' : units === 'f' ? '°F' : ' scientific';
      callback(
        undefined,
        `Location Name: ${name} | Location Region: ${region} | Location Country: ${country} | Location Latitude: ${lat} | Location Longitude: ${lon} | Weather Description: ${description} | Weather Temperature: ${temperature}${tempUnit} but it feels like ${feelslike}${tempUnit}`,
      );
    }
  });
};

getWeatherData('san diego', 'm', (error, data) => {
  if (error) {
    console.log('Error: ', error);
  } else {
    console.log('Data: ', data);
  }
});
