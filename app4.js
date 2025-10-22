import app3 from './app3.js';

console.log(process.argv);

const query = process.argv[2];
let units = process.argv[3];

if (!units) {
  units = 'm';
}

if (!query) {
  console.log('Please enter place name!');
  process.exit(1);
} else {
  app3.getWeatherData(query, units, (error, data) => {
    if (error) {
      console.log('Error: ', error);
    } else {
      console.log('Data: ', data);
    }
  });
}
