import React from "react";

const Home = () => {
  return (
    <section className="welcome">
      <h1 className="welcomeheader">REST Countries App</h1>
      <p className="parag">
        Welcome to REST Countries App. In this app you can search for countries and find
        some basic information about them.
      </p>
      <p className="parag">
        APIs used in this project are{" "}
        <a href="https://restcountries.com/" target="_blank">
          REST Countries API
        </a>{" "}
        and{" "}
        <a href="https://openweathermap.org/" target="_blank">
          OpenWeatherMap.org
        </a>
      </p>
    </section>
  );
};

export default Home;
