ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map('map', {
    center: [56.326887, 44.005986],
    zoom: 10
  });
  var mapContacts = new ymaps.Map('contacts-map', {
    center: [56.321591, 43.952743],
    zoom: 13
  });
/*
  var myPlacemark = new ymaps.Placemark([56.32, 43.95], {
    hintContent: 'Содержимое всплывающей подсказки',
    balloonContent: 'Содержимое балуна'
  });

  mapContacts.geoObjects.add(myPlacemark);
  */

}


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    pagination: true
  });

  var owl = $('#carousel-reviews');
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    pagination: false
  });

  $('.next-button').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.prev-button').click(function() {
    owl.trigger('prev.owl.carousel');
  });
});


