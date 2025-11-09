// Import the Supabase client
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Environment variables (these will come from Netlify settings)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fetch message from Supabase
async function loadMessage() {
  // Get the first message from the "messages" table
  const { data, error } = await supabase.from("messages").select("*").limit(1);

  const messageElement = document.getElementById("message");
  if (error) {
    console.error("Error fetching data:", error);
    messageElement.textContent = "Error loading message";
  } else if (data.length > 0) {
    messageElement.textContent = data[0].text;
  } else {
    messageElement.textContent = "No message found";
  }
}

loadMessage();
