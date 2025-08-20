const supabaseUrl = 'https://ilsddenybmvxvzvouwls.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsc2RkZW55Ym12eHZ6dm91d2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0MjA2MDcsImV4cCI6MjA3MDk5NjYwN30.6VkZpSNO7bzv1pbDOTUC8yPompIUCMmfqQ0laRN1JoU';
    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    const emailInput = document.getElementById('email');
    const planSelect = document.getElementById('plan');
    const status = document.getElementById('status');
    const signupBtn = document.getElementById('signupBtn');

    // Define points per plan
    const planPoints = { 'Plan 1': 10, 'Plan 2': 20, 'Plan 3': 30 };

    signupBtn.addEventListener('click', async () => {
      const email = emailInput.value.trim();
      const plan = planSelect.value;
      const points = planPoints[plan];

      if (!email) {
        status.textContent = 'Enter a valid email';
        return;
      }

      try {
        // 1️⃣ Sign up user via Auth (auto-generated password)
        const password = Math.random().toString(36).slice(-8);
        const { data: authData, error: authError } = await supabase.auth.signUp({ email, password });
        if (authError) {
          status.textContent = 'Signup error: ' + authError.message;
          return;
        }

        // 2️⃣ Insert user plan & points into user_points table
        const { data, error } = await supabase.from('user_points').insert([
          { email, plan, points }
        ]);
        if (error) {
          status.textContent = 'Error saving plan: ' + error.message;
        } else {
          status.textContent = `Signup successful! ${plan} chosen with ${points} points.`;
          emailInput.value = '';
        }
      } catch (err) {
        status.textContent = 'Request failed: ' + err.message;
      }
    });
