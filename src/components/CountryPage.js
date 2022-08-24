import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Axios from "axios";
import millify from "millify";

const CountryPage = () => {
  const { name } = useParams();

  const [country, setCountry] = useState();
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/225px-No_flag.svg.png?20220314051100"
  );
  const [coat, setCoat] = useState();
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();

  useEffect(() => {
    Axios.get("https://restcountries.com/v3.1/alpha/" + name)
      .catch((err) => {
        console.log("Something went wrong with the REST Countries API call. " + err);
      })
      .then((res) => {
        setCountry(res?.data);
        setFlag(res?.data[0]?.flags.svg);
        setCoat(res?.data[0]?.coatOfArms?.svg);
        Axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${res?.data[0]?.capital}&units=metric&appid=` +
            process.env.REACT_APP_WEATHER_API
        )
          .catch((err) => {
            console.log("Something went wrong went getting wheather info. " + err);
            console.log(err);
            setLoading(false);
          })
          .then((response) => {
            setWeather(response?.data);
            setLoading(false);
          });
      });
  }, []);

  const wind = (deg) => {
    const direction = [
      "North",
      "North-East",
      "East",
      "South-East",
      "South",
      "South-West",
      "West",
      "North-West",
    ];

    let index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;

    return direction[index];
  };

  return !loading ? (
    <div className="country">
      <div className="countryname">
        <h2>{country[0]?.name?.common}</h2>
        <h4>{country[0]?.name?.official}</h4>
      </div>
      <div className="countryinfo">
        <div className="leftpanel">
          <img
            src={flag}
            alt={country[0]?.name?.official + " flag"}
            className="bigflag"
          />
          <small>{"Flag of " + country[0]?.name?.official}</small>
          {coat ? (
            <>
              <img
                src={country[0]?.coatOfArms?.svg}
                alt={"Coat of Arms of " + country[0]?.name?.official}
                className="coatofarms"
              />
              <small>{"Coat of Arms of " + country[0]?.name?.official}</small>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="rightpanel">
          <ul className="infolist">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>{" "}
              {millify(country[0]?.population)}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                />
                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
              </svg>{" "}
              {country[0]?.capital}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-translate"
                viewBox="0 0 16 16"
              >
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
              </svg>{" "}
              {Object.values(country[0]?.languages || {}).map((lang, i) => (
                <span key={i}>{(i ? ", " : "") + lang}</span>
              ))}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-currency-exchange"
                viewBox="0 0 16 16"
              >
                <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
              </svg>{" "}
              {Object.values(country[0]?.currencies || {}).map((currency, i) => (
                <span key={i}>{(i ? ", " : "") + currency.name}</span>
              ))}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-thermometer-half"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
              </svg>{" "}
              {weather?.name
                ? "Current weather in " + weather?.name + ": "
                : "Cannot get weather data "}
              {weather?.weather[0]?.description
                ? weather?.weather[0]?.description + " "
                : ""}
              {weather?.main?.temp ? weather?.main?.temp + "°C " : ""}
              {weather?.main?.feels_like
                ? "feels like " + weather?.main?.feels_like + "°C"
                : ""}{" "}
              {weather?.main?.humidity
                ? "with " + weather?.main?.humidity + "% humidity."
                : ""}{" "}
              {weather?.wind?.deg
                ? "Wind is blowing towards " +
                  wind(weather?.wind?.deg) +
                  " with " +
                  weather?.wind?.speed +
                  "m/s."
                : ""}
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading">
      <Spinner animation="border" role="status" variant="light" />
    </div>
  );
};

export default CountryPage;
