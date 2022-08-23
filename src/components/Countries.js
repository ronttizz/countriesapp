// import CountryCard from "./CountryCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import millify from "millify";
import { LinkContainer } from "react-router-bootstrap";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  const search = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <InputGroup
        size="lg"
        style={{ width: "75vw", margin: "0 auto", marginBottom: "2rem" }}
      >
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={search}
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
              return (
                <Card style={{ width: `25rem`, margin: `1rem` }} key={i}>
                  <Card.Img
                    src={country?.flags?.svg}
                    className="flag"
                    alt={country?.name?.common + " flag"}
                  />
                  <Card.Header>
                    <Card.Title style={{ textAlign: `center` }}>
                      {country?.name?.common}
                    </Card.Title>
                    <Card.Text style={{ textAlign: `center` }}>
                      {country?.name?.official}
                    </Card.Text>
                  </Card.Header>
                  <ListGroup style={{ borderRadius: "0" }}>
                    <ListGroup.Item>
                      Currencie(s)
                      <ListGroup variant="flush">
                        {Object.values(country?.currencies || {}).map((currency, i) => (
                          <ListGroup.Item key={i}>{currency.name}</ListGroup.Item>
                        ))}
                      </ListGroup>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Language(s)
                      <ListGroup variant="flush">
                        {Object.values(country?.languages || {}).map((language, i) => (
                          <ListGroup.Item key={i}>{language}</ListGroup.Item>
                        ))}
                      </ListGroup>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Population
                      <ListGroup variant="flush">
                        <ListGroup.Item>{millify(country?.population)}</ListGroup.Item>
                      </ListGroup>
                    </ListGroup.Item>
                  </ListGroup>
                  <LinkContainer
                    to={`${country?.name?.common}`}
                    style={{ width: "fit-content", margin: "0.75rem auto" }}
                  >
                    <Button>Read more</Button>
                  </LinkContainer>
                </Card>
              );
            })
        ) : (
          <Spinner animation="border" role="status" variant="light" />
        )}
      </div>
    </div>
  );
};

export default Countries;
