// src/integrations/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Read from environment (set via .env.local)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Kick off Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
