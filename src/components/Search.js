import { useDispatch } from "react-redux";

import { search } from "../features/countries/countriesSlice";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Search = () => {
  const dispatch = useDispatch();

  const searching = (e) => {
    dispatch(search(e.target.value.trim()));
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
      />
    </InputGroup>
  );
};

export default Search;
