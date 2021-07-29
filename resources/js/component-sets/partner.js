import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");

$(function () {
    function slickIt() {
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
                autoplaySpeed: 3000,
                responsive   : [
                    {
                        breakpoint: 767,
                        settings  : "unslick",
                        // settings: {
                        //     slidesToShow: 2,
                        //     slidesToScroll: 1,
                        // }
                    },
                ],
            })
        });
    }

    slickIt();
    $(window).resize(function(){
        let $windowWidth = $(window).width();
        if ($windowWidth > 767) {
            slickIt();
        }
    });
});
