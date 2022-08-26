import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Countries from "./components/Countries";
import CountryPage from "./components/CountryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:name" element={<CountryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
