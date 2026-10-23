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

  // Guest-list / enquiry form.
  // Works with Formspree (or any form endpoint): set data-endpoint on the <form>.
  // With no endpoint set, it falls back to opening an email draft (mailto).
  var form = document.getElementById('guest-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-msg');
      var endpoint = form.getAttribute('data-endpoint');
      var data = new FormData(form);

      function done() {
        form.reset();
        msg.style.display = 'block';
        msg.focus();
      }

      if (endpoint) {
        fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          .then(function (r) { if (r.ok) { done(); } else { throw new Error('bad'); } })
          .catch(function () { alert('Sorry, something went wrong. Please email us instead.'); });
      } else {
        var mail = form.getAttribute('data-mailto') || 'REPLACE_WITH_TEAM_EMAIL@example.com';
        var body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') +
          '\nInterest: ' + data.get('interest') + '\nMessage: ' + (data.get('message') || '');
        window.location.href = 'mailto:' + mail + '?subject=' +
          encodeURIComponent('Guest list interest — The Green Dictate') +
          '&body=' + encodeURIComponent(body);
        done();
      }
    });
  }
})();
