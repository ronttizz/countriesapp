import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Axios from "axios";
import millify from "millify";

const CountryPage = () => {
  const params = useParams();

  const [country, setCountry] = useState();
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/225px-No_flag.svg.png?20220314051100"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("https://restcountries.com/v3.1/name/" + params.name)
      .catch((err) => {
        console.log("Something went wrong with the REST Countries API call. " + err);
      })
      .then((res) => {
        setCountry(res?.data);
        setFlag(res?.data[0]?.flags.svg);
        setLoading(false);
        console.log(res?.data[0]?.flags.svg);
        console.log(res?.data);
      });
  }, []);

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
        </div>
        <div className="rightpanel">
          <ul>
            <li>{millify(country[0]?.population)}</li>
            <li>{country[0]?.capital}</li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <Spinner animation="border" role="status" variant="light" />
  );
};

export default CountryPage;
