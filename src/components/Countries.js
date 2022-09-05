import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CountryCard from "./CountryCard";
import { initCountries, search } from "../features/countries/countriesSlice";

import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchTerm = useSelector((state) => state.countries.search);

  useEffect(() => {
    dispatch(initCountries());
    // eslint-disable-next-line
  }, [dispatch]);

  const searching = (e) => {
    dispatch(search(e.target.value.trim()));
  };

  return (
    <div>
      <InputGroup
        size="lg"
        style={{
          minWidth: "350px",
          maxWidth: "40vw",
          margin: "0 auto",
          marginBottom: "2rem",
        }}
      >
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={searching}
          placeholder="Search..."
        />
      </InputGroup>
      <div className="countrylisting">
        {!loading ? (
          countries
            .filter((country) => {
              return (
                country?.name?.common
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ||
                country?.name?.official
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim())
              );
            })
            .map((country, i) => {
              return <CountryCard key={i} {...country} country={country} />;
            })
        ) : (
          <Spinner animation="border" role="status" variant="light" />
        )}
      </div>
    </div>
  );
};

export default Countries;
