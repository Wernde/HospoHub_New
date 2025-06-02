import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { supabase } from "./integrations/supabaseClient";

function App() {
  // Check if a user session exists
  const session = supabase.auth.session();

  return (
    <Router>
      <Routes>
        {/* Root: Landing screen */}
        <Route path="/" element={<Landing />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard (only if logged in; otherwise redirect to landing) */}
        <Route
          path="/dashboard"
          element={session ? <Dashboard /> : <Navigate to="/" />}
        />

        {/* HospoHouse placeholder */}
        <Route
          path="/hospohouse"
          element={<div className="p-6 text-center text-white">HospoHouse Page Coming Soon</div>}
        />

        {/* Fallback: any other URL → redirect to Landing */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
