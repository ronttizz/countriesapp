const CountryCard = ({ country, flags, currencies, languages }) => {
  return (
    <div className="countrybox">
      <div className="names">
        <h1 className="commonname">{country}</h1>
        <p className="officialname">{country}</p>
      </div>
      <img src={flags.svg} className="flag" />

      <div className="countryinfo">
        <div className="infoblock">
          <p className="info">Currency</p>
          <p className="info">
            {Object.values(currencies || {}).map((currency, i) => (
              <span key={i}>{(i ? ", " : "") + currency.name}</span>
            ))}
          </p>
        </div>
        <div className="infoblock">
          <p className="info">Language(s)</p>
          <p className="info">
            {Object.values(languages || {}).map((language, i) => (
              <span key={i}>{(i ? ", " : "") + language}</span>
            ))}
          </p>
        </div>
        <div className="infoblock">
          <p className="info">Population</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
