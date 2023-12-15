// importing the css for the global stylings
import "./App.css";

// importing the react router dom for making routes
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

// importing use auth context for resolving redirecting issue
import { useAuthContext } from "./hooks/UseAuthContext";

export default function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!user ? <LoginScreen /> : <Navigate to="/dashboard/" />}
        />
        <Route
          path="/login"
          element={!user ? <LoginScreen /> : <Navigate to="/dashboard/" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignupScreen /> : <Navigate to="/dashboard/" />}
        />
        <Route
          path="/dashboard/*"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
