import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");

$(function () {
    $('.slick-slideshow').slick({
        dots          : true,
        infinite      : true,
        adaptiveHeight: true,
        autoplay      : true,
        autoplaySpeed : 3000
    })
});