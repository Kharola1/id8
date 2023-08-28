$(document).ready(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            //FYI just have a look at the object to find available information
            //press f12 to access the console in most browsers
            //you could also debug or look in the source
            console.log(slider);
            return "<span> 0" + (i + 1) + '/ </span> 0' + slider.slideCount;
        }
      });
});