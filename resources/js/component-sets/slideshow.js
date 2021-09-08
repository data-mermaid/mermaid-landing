import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");

$(function () {
    $('.slick-slideshow').slick({
        dots          : false,
        infinite      : true,
        adaptiveHeight: true,
        autoplay      : false,
        autoplaySpeed : 3000
    })
});
