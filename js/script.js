// splide-slider

if ($(".effortless-returns-slide").length) {
    new Splide('.effortless-returns-slide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
    //   perPage: 7,
      pagination: false,
      arrows: false,
      direction: 'ltr',
      autoWidth: true,
      autoScroll: {
        speed: 1.5,
      },
    }).mount(window.splide.Extensions);
}

$('.navbar-toggler').on('click', function(){
  $('body').toggleClass('o-hidden');
})

// how-it-work-mobile-slider

// $('.slider').slick({
//   dots: true,
//   arrow: false,
//   fade: true,
//   speed: 1800,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// })

$(function() {
  $('.work-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
          {
              breakpoint: 767,
              settings: 'unslick'
          }
      ]
  });

  $(window).on('resize', function() {
      $('.work-slider').slick('resize');
  });
});