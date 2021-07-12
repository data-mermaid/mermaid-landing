import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");

$(function () {
    $('.slick-partners').each(function () {
        let slideNumber = 5;
        if ($(this).attr('data-slide-number')) {
            slideNumber = $(this).attr('data-slide-number');
        }

        $(this).slick({
            // dots          : true,
            arrows        : true,
            slidesToShow  : slideNumber,
            slidesToScroll: 1,
            // infinite      : true,
            // adaptiveHeight: true,
            autoplay     : false,
            autoplaySpeed: 3000
        })
    });
});
