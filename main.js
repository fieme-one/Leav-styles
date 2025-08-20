 import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.min.js';

    const supabaseUrl = 'https://ilsddenybmvxvzvouwls.supabase.co';
    const supabaseKey = 'YOUR_SUPABASE_KEY_HERE';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const emailInput = document.getElementById('email');
    const status = document.getElementById('status');
    const sendBtn = document.getElementById('sendBtn');

    sendBtn.addEventListener('click', async () => {
      const email = emailInput.value.trim();
      if (!email) {
        status.textContent = 'Enter a valid email';
        return;
      }

      try {
        // Auto-generate dummy password (test only)
        const password = Math.random().toString(36).slice(-8);
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
          status.textContent = 'Error sending email: ' + error.message;
        } else {
          status.textContent = 'Email sent to Supabase (test only).';
          emailInput.value = '';
        }
      } catch (err) {
        status.textContent = 'Request failed: ' + err.message;
      }
    });