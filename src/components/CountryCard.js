import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import millify from "millify";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../features/countries/countriesSlice";

const CountryCard = ({ population, languages, currencies, name, flags, country }) => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.countries.favourites);

  return (
    <div className="countrybox">
      <Card style={{ width: "25rem", margin: `1rem` }}>
        <div className="fav">
          {favourites.some((item) => item.name.official === country.name.official) ? (
            <i
              className="bi bi-heart-fill"
              onClick={() => {
                dispatch(removeFavourite(country));
              }}
            ></i>
          ) : (
            <i
              className="bi bi-heart"
              onClick={() => {
                dispatch(addFavourite(country));
              }}
            ></i>
          )}
        </div>
        <Card.Img src={flags?.svg} className="flag" alt={name?.common + " flag"} />
        <Card.Header>
          <Card.Title style={{ textAlign: `center` }}>{name?.common}</Card.Title>
          <Card.Text style={{ textAlign: `center` }}>{name?.official}</Card.Text>
        </Card.Header>
        <ListGroup style={{ borderRadius: "0" }}>
          <ListGroup.Item>
            Currencie(s)
            <ListGroup variant="flush">
              {Object.values(currencies || {}).map((currency, i) => (
                <ListGroup.Item key={i}>{currency.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            Language(s)
            <ListGroup variant="flush">
              {Object.values(languages || {}).map((language, i) => (
                <ListGroup.Item key={i}>{language}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            Population
            <ListGroup variant="flush">
              <ListGroup.Item>{millify(population)}</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
        <LinkContainer
          to={`/countries/${name.common}`}
          style={{ width: "fit-content", margin: "0.75rem auto" }}
          state={{ country }}
        >
          <Button>Read more</Button>
        </LinkContainer>
      </Card>
    </div>
  );
};

export default CountryCard;
