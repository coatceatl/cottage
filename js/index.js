ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
    center: [56.326887, 44.005986],
    zoom: 10
  });
}


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    pagination : true
  });
  $('.carousel-reviews').owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    pagination : true,
    nav: true
  });
});

