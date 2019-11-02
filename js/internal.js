//Mobile menu
$('.header__menu-btn').click(function() {
  $(this).toggleClass('header__menu-btn--opened');
  $('.header__list').slideToggle();
});

if (window.innerWidth < 1022) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  });
}
