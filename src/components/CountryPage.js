import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Axios from "axios";

const CountryPage = () => {
  const params = useParams();

  const [country, setCountry] = useState([]);
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
      <p>This will have information about the country</p>
    </div>
  ) : (
    <Spinner animation="border" role="status" variant="light" />
  );
};

export default CountryPage;
