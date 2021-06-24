import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");
// require("slick-carousel/slick/slick-theme.css");

$(function () {
    $('.slick-carousel').slick({
        dots          : true,
        infinite      : true,
        adaptiveHeight: true
    })
});
