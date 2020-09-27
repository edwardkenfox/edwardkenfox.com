$(function () {
  $('.rslides').each((_, el) => {
    $(el).responsiveSlides({
      auto: false,
      pagination: true,
      nav: true,
      fade: 500,
      maxwidth: 800
    });
  });
});
