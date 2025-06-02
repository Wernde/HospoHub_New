import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { supabase } from "./integrations/supabaseClient";

function App() {
  // Simple test-to-console on mount
  useEffect(() => {
    supabase
      .from("users")
      .select("id, email")
      .then(({ data, error }) => {
        console.log("Users:", data, error);
      });
  }, []);

  // Check for an authenticated session
  const session = supabase.auth.session();

  return (
    <Router>
      <Routes>
        {/* Landing screen at root */}
        <Route path="/" element={<Landing />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard if authenticated; else redirect back to Landing */}
        <Route
          path="/dashboard"
          element={session ? <Dashboard /> : <Navigate to="/" />}
        />

        {/* Placeholder for HospoHouse */}
        <Route
          path="/hospohouse"
          element={
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
              <h2 className="text-3xl">HospoHouse Page Coming Soon</h2>
            </div>
          }
        />

        {/* Redirect any unknown route back to Landing */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;