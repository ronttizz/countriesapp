import "./App.css";
import { BrowserRouter, useParams, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
