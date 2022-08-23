import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Countries from "./components/Countries";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="countries" element={<Countries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
