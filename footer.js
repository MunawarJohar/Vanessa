// Shared site footer — injected into <footer id="footer-placeholder"></footer>
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('footer-placeholder');
  if (!el) return;
  el.innerHTML = `
    <div class="container footer-grid">
      <div>
        <p class="footer-brand">Acute Preventive Health</p>
        <div class="social-links">
          <!-- TODO: swap in the real Facebook page URL -->
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M15 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4v2H9v3h2V21h3v-6.5h2.5l.5-3H14v-2c0-.55.45-1 1-1z" fill="#111"/>
            </svg>
          </a>
          <!-- TODO: swap in the real LinkedIn page URL -->
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.5 8.5h-3V19h3V8.5zM5 7a1.75 1.75 0 1 0 0-3.5A1.75 1.75 0 0 0 5 7zM10.5 8.5h-3V19h3v-5.7c0-1.5.9-2.3 2-2.3s1.8.8 1.8 2.3V19h3v-6.2c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5 1-3 1.6v-1.5z" fill="#111"/>
            </svg>
          </a>
          <!-- TODO: swap in the real Reddit page/subreddit URL -->
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="12" cy="14" r="6" fill="none" stroke="#111" stroke-width="1.6"/>
              <circle cx="9" cy="14" r="1.1" fill="#111"/>
              <circle cx="15" cy="14" r="1.1" fill="#111"/>
              <path d="M9 17c1 1 5 1 6 0" stroke="#111" stroke-width="1.4" fill="none" stroke-linecap="round"/>
              <path d="M12 8V5m0 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 0c2 0 4 .8 5 2" stroke="#111" stroke-width="1.4" fill="none" stroke-linecap="round"/>
              <circle cx="19" cy="9" r="1.3" fill="#111"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4><a href="blog.html">News / Updates</a></h4>
      </div>
      <div class="footer-col">
        <h4>Contact Us:</h4>
        <p><a href="mailto:Taylor@Acutepreventivehealth.com">Taylor@Acutepreventivehealth.com</a></p>
        <p><a href="tel:+18007814819">(800) 781-4819</a></p>
      </div>
      <div class="footer-col">
        <h4>Location:</h4>
        <p>7435 University Ave. #104</p>
        <p>La Mesa, CA 91942</p>
      </div>
    </div>
  `;
});
