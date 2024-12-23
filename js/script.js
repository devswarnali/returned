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
        speed: 1.2,
      },
    }).mount(window.splide.Extensions);
}