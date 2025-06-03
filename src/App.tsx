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
import { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={session ? <Dashboard /> : <Navigate to="/\" replace />}
        />
        <Route
          path="/hospohouse"
          element={
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
              <h2 className="text-3xl">HospoHouse Page Coming Soon</h2>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/\" replace />} />
      </Routes>
    </Router>
  );
}

export default App;