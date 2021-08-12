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
                arrows        : true,
                slidesToShow  : slideNumber,
                slidesToScroll: 1,
                autoplay      : false,
                autoplaySpeed : 3000,
                infinite      : false,
                responsive    : [
                    {
                        breakpoint: 767,
                        settings  : {
                            dots        : true,
                            rows        : 2,
                            slidesToShow: 2,
                        }
                    },
                ],
            })
        });
    }

    slickIt();

    // $(window).resize(function () {
    //     let $windowWidth = $(window).width();
    //     if ($windowWidth > 767) {
    //         slickIt();
    //     } else {
    //         slickIt();
    //     }
    // });
});
