import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Countries from "./components/Countries";
import CountryPage from "./components/CountryPage";
import Favourites from "./components/Favourites";
import { useDispatch, useSelector } from "react-redux";
import { saveFavourites } from "./features/countries/countriesSlice";
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.countries.favourites);

  useEffect(() => {
    saveFavourites(favorites);
  }, [dispatch, favorites]);

  window.addEventListener("scroll", () => {
    window.scrollY > 300 ? setScrolled(true) : setScrolled(false);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="countries" element={<Countries />} />
            <Route path="countries/:name" element={<CountryPage />} />
            <Route path="favourites" element={<Favourites />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {scrolled ? (
        <div className="scroll">
          <i className="bi bi-skip-backward-circle" onClick={() => scrollToTop()}></i>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
