
(function () {
  var nav = document.getElementById('nav'),
      burger = document.getElementById('navBurger'),
      menu = document.getElementById('navMenu');

  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 10); }

  burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', function (e) { if (!nav.contains(e.target)) setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 960) setMenu(false); });
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
