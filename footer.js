// Shared site footer — injected into <footer id="footer-placeholder"></footer>
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('footer-placeholder');
  if (!el) return;
  el.innerHTML = `
    <div class="container footer-grid">
      <div>
        <p class="footer-brand">Acute Preventive Health</p>
        <div class="social-links">
          <a href="#" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M15 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4v2H9v3h2V21h3v-6.5h2.5l.5-3H14v-2c0-.55.45-1 1-1z" fill="#111"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.5 8.5h-3V19h3V8.5zM5 7a1.75 1.75 0 1 0 0-3.5A1.75 1.75 0 0 0 5 7zM10.5 8.5h-3V19h3v-5.7c0-1.5.9-2.3 2-2.3s1.8.8 1.8 2.3V19h3v-6.2c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5 1-3 1.6v-1.5z" fill="#111"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>News / Updates</h4>
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
