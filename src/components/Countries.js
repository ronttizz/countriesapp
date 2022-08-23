// import CountryCard from "./CountryCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .catch((error) => console.log(error))
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      });
  }, []);

  const search = (e) => {
    setSearchTerm(e.target.value);
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
          onChange={search}
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
              return <CountryCard key={i} {...country} />;
            })
        ) : (
          <Spinner animation="border" role="status" variant="light" />
        )}
      </div>
    </div>
  );
};

export default Countries;
