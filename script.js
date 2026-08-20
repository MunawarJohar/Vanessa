// Minor shared interactivity across pages.

document.addEventListener('DOMContentLoaded', function () {

  // Booking buttons on the home / reschedule pages — placeholder action.
  // Wire this up to your real booking/payment flow (e.g. Acuity, Stripe Checkout).
  document.querySelectorAll('.book-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var slot = btn.closest('.class-slot');
      var time = slot ? slot.querySelector('.time').textContent : '';
      alert('Booking flow goes here for the ' + time + ' class. Hook this up to your checkout.');
    });
  });

  // FAQ page uses native <details>/<summary>, so no JS is required there,
  // but this keeps only one item open at a time for a tidier experience.
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

});
