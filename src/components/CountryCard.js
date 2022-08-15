const CountryCard = ({ country }) => {
  return (
    <div className="countrybox">
      <h1 className="commonname">{country}</h1>
      <p className="officialname">{country}</p>
      <div className="countryinfo">
        <p className="info">Currency</p>
        <p className="info">Language(s)</p>
        <p className="info">Population</p>
      </div>
    </div>
  );
};

export default CountryCard;
