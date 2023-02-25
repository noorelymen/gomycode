import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages";
import MoviesPage from "./pages/movies";
import DetailsPage from "./pages/details";
import LoginPage from "./pages/auth/login";
import AdminPageIndex from "./pages/admin";
import { AdminLayout } from "./components/layouts/admin";
import NotFoundPage from "./pages/404";
import AdminTestPage from "./pages/admin/test";
import PrivateRoute from "./components/private-route";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<DetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="movies" element={<AdminPageIndex />} />
          <Route path="test" element={<AdminTestPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
