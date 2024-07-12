
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nojqefutxjjfdvrlmnrq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vanFlZnV0eGpqZmR2cmxtbnJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyNjY4MzMsImV4cCI6MjAzNTg0MjgzM30.vmOQba7ZfMM8k5xrfrEsC1gR_39PK7TEbW0TuZKL1VY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;