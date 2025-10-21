// Without Yargs
import request from 'postman-request';
import dotenv from 'dotenv';
dotenv.config();

const weatherStack_API = process.env.weatherStack_API;
const units = 'm';
const query = 'San Diego';

const url = `https://api.weatherstack.com/current?access_key=${weatherStack_API}&query=${query}&units=${units}`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log(
      'Failed to fetch weather data! Check your internet Connection...',
    );
  } else if (response.body.error) {
    console.log(
      `Error Code: ${response.body.error.code},  ${response.body.error.type}, ${response.body.error.info}`,
    );
  } else {
    console.log(response.body);

    console.log(
      `Location Name: ${response.body.location.name} | Location Region: ${response.body.location.region} | Location Country: ${response.body.location.country} | Location Latitude: ${response.body.location.lat} | Location Longitude: ${response.body.location.lon} | Weather Description: ${response.body.current.weather_descriptions[0]} | Weather Temperature: ${response.body.current.temperature} degrees but it feels like ${response.body.current.feelslike}°C`,
    );
  }
});
