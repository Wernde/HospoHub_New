import React, { useEffect, useState } from "react";
import { supabase } from "../integrations/supabaseClient";
import { User } from "@supabase/supabase-js";

interface UserProfile {
  id: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const user = supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setProfile({ id: user.id, email: user.email! });
      }
    });
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!profile) {
    return <p className="p-6">Loading…</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome, {profile.email}</h1>
      <button
        onClick={handleSignOut}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;