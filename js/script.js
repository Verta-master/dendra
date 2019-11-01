//Mobile menu
$('.menu-btn').click(function() {
  $(this).toggleClass('menu-btn--opened');
  $('.menu__list').slideToggle();
  $('.menu').toggleClass('menu--opened');
});

if (window.innerWidth < 1022) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  });
}
