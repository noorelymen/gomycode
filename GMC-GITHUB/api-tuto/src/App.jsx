import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />

        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
