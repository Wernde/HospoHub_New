import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { supabase } from "./integrations/supabaseClient";

function App() {
  // Keep track of the authenticated session in React state
  const [session, setSession] = useState(supabase.auth.session());

  // Subscribe to auth‐state changes on mount
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );
    // Cleanup subscription on unmount
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  // (Optional) A one‐time test to console.log all users
  useEffect(() => {
    supabase
      .from("users")
      .select("id, email")
      .then(({ data, error }) => {
        console.log("Users:", data, error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Landing screen at root */}
        <Route path="/" element={<Landing />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard if authenticated; otherwise redirect back to Landing */}
        <Route
          path="/dashboard"
          element={session ? <Dashboard /> : <Navigate to="/" replace />}
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

        {/* Catch-all: redirect any unknown route to Landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
