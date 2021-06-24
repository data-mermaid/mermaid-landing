import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");

$(function () {
    $('.slick-testimonial').slick({
        dots          : true,
        arrows         : false,
        infinite      : true,
        adaptiveHeight: true,
        autoplay      : true,
        autoplaySpeed : 3000
    })
});
