// Supabase configuration
const SUPABASE_URL = 'https://osjrjmxwqbjkzinbhvdr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zanJqbXh3cWJqa3ppbmJodmRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5NjA3MTYsImV4cCI6MjA3MjUzNjcxNn0.TT7e9Y36ibZYNMCvzvAKGprz9dVZ_QVxEdp_FLfiCso';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other files
window.supabaseClient = supabase;
