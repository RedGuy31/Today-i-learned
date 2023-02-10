import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ubyeibesgzvoxajmicbs.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVieWVpYmVzZ3p2b3hham1pY2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzNjY1NzYsImV4cCI6MTk4ODk0MjU3Nn0.7xYRimaVo9LenRGQaDAx0zKX2egcIfEFd7JbiRw2o6A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
