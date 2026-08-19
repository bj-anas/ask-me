(function () {
  var bar = document.querySelector('[data-announcement-bar]');
  if (!bar) {
    return;
  }

  var key = 'announcement-bar:' + (bar.textContent || '').trim();

  if (bar.hasAttribute('data-dismissible') && window.localStorage.getItem(key)) {
    return;
  }

  bar.removeAttribute('hidden');

  var close = bar.querySelector('[data-announcement-close]');
  if (close) {
    close.addEventListener('click', function () {
      window.localStorage.setItem(key, '1');
      bar.setAttribute('hidden', '');
    });
  }
})();
