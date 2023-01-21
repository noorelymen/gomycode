import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import DetailsPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/productlist/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
