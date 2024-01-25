$(function () {
    let oldScroll = $(window).scrollTop();
    let didScroll = false;
    const mainNavbar = '#navbarNav'

    $('#main-header .navbar-toggler').click(function (e) {
        const mainNavbar = $(this).attr('data-bs-target');

        $('body').toggleClass('static');
        if ($('.page-tutorial').length) {
            if ($(this).hasClass('collapsed')) {
                $('#main-header').removeClass('open');
            } else {
                $('.side-menu-col').toggleClass('open');
                $(mainNavbar).removeClass('show');
            }
        }
        else{
            $('#main-header').toggleClass('open');

        }
    })

    setTimeout(function () {
        $navbar = $('#main-header');
        if (window.pageYOffset === 0) {
            $navbar.removeClass("reveal");
            $navbar.removeClass("vanish");
            $navbar.addClass("top");
        } else {
            $navbar.addClass('fixed').addClass("reveal");
            $navbar.removeClass("vanish");
            $navbar.removeClass("top");
        }
    }, 300);

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        $navbar = $('#main-header');
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 0) {
            $navbar.addClass("fixed").removeClass('top');
            if (prevScrollpos >= currentScrollPos) {
                $navbar.addClass("reveal").removeClass("vanish").removeClass("top");
            } else {
                $navbar.addClass("vanish").removeClass("reveal").removeClass("top");
            }
        }

        prevScrollpos = currentScrollPos;

        if (currentScrollPos <= 0) {
            setTimeout(function () {
                $navbar.addClass("top").removeClass("fixed").removeClass("reveal").removeClass("vanish");
            }, 150);
        }
    }


    // setInterval(function(){
    //     const prevScrollpos = window.pageYOffset;
    //     window.onscroll = function () {
    //         const currentScrollPos = window.pageYOffset;
    //         $navbar = $('#main-header');
    //         if (currentScrollPos === 0) {
    //             $navbar.addClass("top").removeClass("reveal").removeClass("vanish");
    //         }
    //         else {
    //             if (prevScrollpos > currentScrollPos) {
    //                 $navbar.addClass("reveal").removeClass("vanish").removeClass("top");
    //             } else {
    //                 $navbar.addClass("vanish").removeClass("reveal").removeClass("top");
    //             }
    //         }
    //     };
    // },300);

    /* add current to parent because statamic bug hasnt fixed yet */
    /* homepage */
    $('#main-header .dropdown-menu .dropdown-item.current').parents('.nav-item').addClass('current');
    /* tutorial page*/
    $('.tutorial-side-menu .collapse .nav-link.current')
        .parents('.collapse').addClass('show')
        .siblings('.nav-item').find('.collapse-link').removeClass('collapsed');

    $('.page-tutorial .tutorial-side-menu-header .close-button-container .close-button').click(function () {
        $('#main-header').removeClass('open');
        $('.side-menu-col').removeClass('open');
        $('body').removeClass('static');
        $('.navbar-toggler').addClass('collapsed');
        $(mainNavbar).removeClass('show');
    });

    $('.tutorial-side-menu-header .back-to-menu-button').click(function () {
        $('.navbar-toggler').removeClass('collapsed');
        $('#main-header .navbar-collapse').addClass('show');

        $('.side-menu-col').removeClass('open');
        $('#main-header').addClass('open');
    })

    $('#main-header .navbar .nav-item .nav-link').attr('target','_self');
    $('#main-header .navbar .nav-item:nth-last-child(1) .nav-link').attr('target','_blank');
    $('#main-header .navbar .nav-item:nth-last-child(2) .nav-link').attr('target','_blank');

})
