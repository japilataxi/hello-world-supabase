import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Try to get variables from window or fallback to default placeholders
const SUPABASE_URL = window.SUPABASE_URL || "https://pbnuiqmbtrkxfxpuhjdf.supabase.co";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

// Create Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadMessage() {
  const messageElement = document.getElementById("message");

  try {
    const { data, error } = await supabase.from("messages").select("text").limit(1);
    if (error) throw error;
    messageElement.textContent = data.length > 0 ? data[0].text : "No message found.";
  } catch (err) {
    console.error("Error fetching data:", err);
    messageElement.textContent = "Error loading message.";
  }
}

loadMessage();
