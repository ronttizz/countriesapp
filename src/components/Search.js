import { useDispatch, useSelector } from "react-redux";

import { search } from "../features/countries/countriesSlice";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";

const Search = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.countries.search);

  const searching = (e) => {
    dispatch(search(e.target.value.trim()));
  };

  const clear = () => {
    dispatch(search(""));
  };

  return (
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
        value={searchTerm}
      />
      <Button variant="light" onClick={clear}>
        X
      </Button>
    </InputGroup>
  );
};

export default Search;
