const CountryCard = ({ country }) => {
  return (
    <div className="countrybox">
      <div className="names">
        <h1 className="commonname">{country}</h1>
        <p className="officialname">{country}</p>
      </div>
      <div className="countryinfo">
        <div className="infoblock">
          <p className="info">Currency</p>
          <p className="info">Euro</p>
        </div>
        <div className="infoblock">
          <p className="info">Language(s)</p>
        </div>
        <div className="infoblock">
          <p className="info">Population</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
