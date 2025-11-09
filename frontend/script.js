// Import Supabase client
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Environment variables (from Netlify or local environment)
const SUPABASE_URL = window.SUPABASE_URL || "https://pbnuiqmbtrkxfxpuhjdf.supabase.co";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

// Create Supabase client instance
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Function to load all messages from the "messages" table
async function loadMessages() {
  const messageElement = document.getElementById("message");

  try {
    // Select all "text" values from the "messages" table
    const { data, error } = await supabase.from("messages").select("text");
    if (error) throw error;

    // Display all messages
    if (data && data.length > 0) {
      messageElement.innerHTML = ""; // Clear existing content
      data.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = msg.text;
        messageElement.appendChild(p);
      });
    } else {
      messageElement.textContent = "No messages found.";
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    messageElement.textContent = "Error loading messages.";
  }
}

// Load messages on page load
loadMessages();

