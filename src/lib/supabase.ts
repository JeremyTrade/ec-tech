import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Server-side Supabase client
export const createServerClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey);
};

// Client-side Supabase client
export const createBrowserClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey);
};
