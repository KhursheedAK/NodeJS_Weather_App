# NodeJS_Weather_App
NodeJS Weather App that fetches current weather data for a specific city from WeatherStack API
<p>app.js displays information without yargs. CLI Command: node app.js</p>
<p>app2.js displays information using yargs. CLI Command: node app2.js weather -c <"city name here"> -u <"units here (m,f, or s)"></p>
<p>app3.js refactors weather api function into callbacks for resuablility. app4.js uses app3.js callback function to find weather data for a specific city. CLI command: node app4.js</p>
<h2>Note:</h2> 
  <p>It uses API Key so it will require user to use their specific API key to be able to use Weatherstack API service</p>
<hr>
<p>Uses 'request' npm module to generate an asynchronous GET request to Weatherstack API</p>
