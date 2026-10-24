// The Green Dictate — site scripts (no dependencies)
(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Guest-list form: sends a confirmation email through EmailJS.
  // Fill in the three IDs below from your EmailJS dashboard.
  var EMAILJS_PUBLIC_KEY = '_LPCG_37bEpgOIVrc';
  var EMAILJS_SERVICE_ID = 'service_ns3x6fb';
  var EMAILJS_TEMPLATE_ID = 'template_f1j5j3l';

  var form = document.getElementById('guest-form');
  if (form) {
    if (window.emailjs && EMAILJS_PUBLIC_KEY) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-msg');
      var btn = form.querySelector('button[type="submit"]');
      var data = new FormData(form);
      var params = {
        to_name: data.get('name'),
        to_email: data.get('email'),
        interest: data.get('interest'),
        message: data.get('message') || ''
      };
      function done() {
        form.reset();
        btn.disabled = false;
        msg.style.display = 'block';
        msg.focus();
      }
      if (!window.emailjs) {
        alert('Email is not set up yet. Add your EmailJS keys in main.js.');
        return;
      }
      btn.disabled = true;
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
        .then(done)
        .catch(function () {
          btn.disabled = false;
          alert('Sorry, something went wrong. Please email us instead.');
        });
    });
  }
})();
