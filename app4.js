import app3 from './app3.js';

app3.getWeatherData('hawaii', 'f', (error, data) => {
  if (error) {
    console.log('Error: ', error);
  } else {
    console.log('Data: ', data);
  }
});
