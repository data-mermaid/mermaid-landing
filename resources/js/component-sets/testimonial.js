import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");

$(function () {
    $('.slick-testimonials').slick({
        // dots          : true,
        arrows         : true,
        infinite      : true,
        adaptiveHeight: true,
        autoplay      : false,
        autoplaySpeed : 5000
    })
});
