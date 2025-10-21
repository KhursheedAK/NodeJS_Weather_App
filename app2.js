// With Yargs
import request from 'postman-request';
import dotenv from 'dotenv';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

dotenv.config();

const weatherStack_API = process.env.weatherStack_API;

/* Yargs Command Setup */
yargs(hideBin(process.argv))
  .command({
    command: 'weather',
    describe: 'Fetch current weather for a given city',
    builder: {
      city: {
        alias: 'c',
        describe: 'City name to get weather for',
        demandOption: true,
        type: 'string',
      },
      units: {
        alias: 'u',
        describe: 'Units system: m = Metric, f = Fahrenheit, s = Scientific',
        default: 'm',
        type: 'string',
      },
    },
    handler(argv) {
      const { city, units } = argv;
      const url = `https://api.weatherstack.com/current?access_key=${weatherStack_API}&query=${encodeURIComponent(
        city,
      )}&units=${units}`;

      request({ url, json: true }, (error, response) => {
        if (error) {
          console.log(
            '❌ Failed to fetch weather data! Check your internet connection.',
          );
        } else if (response.body.error) {
          console.log(
            `⚠️ Error Code: ${response.body.error.code} | Type: ${response.body.error.type} | Info: ${response.body.error.info}`,
          );
        } else {
          const { location, current } = response.body;
          console.log('✅ Weather Data Received:\n');
          console.log(
            `📍 Location: ${location.name}, ${location.region}, ${location.country}
🧭 Coordinates: ${location.lat}, ${location.lon}
🌡️  Temperature: ${current.temperature}°C (feels like ${current.feelslike}°C)
☁️  Weather: ${current.weather_descriptions[0]}
💨 Wind Speed: ${current.wind_speed} km/h
🌅 Observation Time: ${current.observation_time}`,
          );
        }
      });
    },
  })
  .help()
  .alias('help', 'h')
  .parse();
