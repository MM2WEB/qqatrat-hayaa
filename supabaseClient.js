// supabaseClient.js
// Assuming you'll load the Supabase library via CDN in your HTML files

// Check if the Supabase library is loaded (it should be, by the time this runs)
if (typeof supabase === 'undefined' || !supabase.createClient) {
    console.error("Supabase library not loaded correctly before supabaseClient.js");
    // You might want to add a fallback or stop execution here in a real app
  } else {
      const { createClient } = supabase;
  
      const supabaseUrl = 'https://glewtsysmyanryacrkpl.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsZXd0c3lzbXlhbnJ5YWNya3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MjY0OTAsImV4cCI6MjA2MTAwMjQ5MH0.UcsQJasUW4pA5fX1eI8pas1AVVHg0krfHFVXt5_RdSY';
  
      // Initialize the Supabase client
      // This 'supabase' variable will overwrite the global one from the CDN,
      // but it's configured with your specific URL and Key.
      // Scripts loaded *after* this one in the HTML can use this configured 'supabase' client.
      window.supabase = createClient(supabaseUrl, supabaseKey);
  
      // Optional: You could also export it if using modules, but for simple HTML/CDN,
      // assigning to window or just relying on the variable scope works.
      // export default window.supabase;
  }