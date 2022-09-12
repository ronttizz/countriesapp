import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import Search from "./Search";

const Favourites = () => {
  const favourites = useSelector((state) => state.countries.favourites);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchTerm = useSelector((state) => state.countries.search);

  return favourites.length > 0 ? (
    <div>
      <Search />
      <div className="countrylisting">
        {!loading ? (
          favourites
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
  ) : (
    <div className="countrylisting white">
      <h1>No favourites added, yet...</h1>
    </div>
  );
};

export default Favourites;
