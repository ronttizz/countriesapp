# Countries App

## Description

Countries app using [REST countries](https://restcountries.com/) to show some basic information about different countries in the world.

User can read more about one country by clicking Read More button on each country card.

Information displayed also includes weather data for the capital city provided by [OpenWeatherMap.org](https://openweathermap.org/).

Some information is still missing for example some countries doesn't have currency, language or capital city listed which may cause that no data is displayed, this can be seen when looking up for example Antartica.

Weather is provided for the capital city and as some countries doesn'have capital city the data can not be provided. Some differences in city names may be found as there might be different names for same city.

The data is only provided by the API's and I do not have control over those, so if you find errors regarding the API data please contact the API owner.

Background picture is provided by [Greg Rosenke at Unsplash](https://unsplash.com/photos/GOWz0zTf_vY) under Unsplash License.

# Running the project

## Important !

To run this application fully you will need an API key from OpenWeatherMap.org

Visit [OpenWeatherMap.org](https://openweathermap.org/) to get yours.

## Fork, clone or download the project.

Run command

```shell
npm install
```

Create .env.local file to project root folder and add following line with your own OpenWeatherMap API key:

```
REACT_APP_WEATHER_API = "YOUR_OWN_WEATHER_API_KEY_HERE"
```

Run command

```shell
npm start
```

Voilá, you have the project running, happy searching!

#

## Ideas for next versions (notes)

- if country doesn't have a capital city, we could use weather data for that country
- displaying "no data available" when no language or currency is available
