import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Countries from "./components/Countries";
import CountryPage from "./components/CountryPage";
import Favourites from "./components/Favourites";
import { useDispatch } from "react-redux";
import { initFavourites } from "./features/countries/countriesSlice";

function App() {
  const dispatch = useDispatch();

  dispatch(initFavourites());
  return (
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
  );
}

export default App;
