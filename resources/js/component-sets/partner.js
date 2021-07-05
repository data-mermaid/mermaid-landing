import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");

$(function () {
    $('.slick-partners').slick({
        // dots          : true,
        arrows         : true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // infinite      : true,
        // adaptiveHeight: true,
        autoplay      : true,
        autoplaySpeed : 3000
    })
});
