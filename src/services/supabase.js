import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ibuhajbdnmfowdssbwfv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlidWhhamJkbm1mb3dkc3Nid2Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNTE0NTEsImV4cCI6MjAwODgyNzQ1MX0.4038IQl7Wi8EAvoQ_x-JuZCeeVZUe5YCLz8auocXAas";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
