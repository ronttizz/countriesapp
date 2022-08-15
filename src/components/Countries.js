import CountryCard from "./CountryCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .catch((error) => console.log(error))
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="countrylisting">
      {!loading ? (
        countries.map((country) => {
          return (
            <CountryCard
              country={country.name?.common}
              key={country.name?.common}
              {...country}
            />
          );
        })
      ) : (
        <p className="parag">Loading...</p>
      )}
    </div>
  );
};

export default Countries;
