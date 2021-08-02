$(function () {
    let oldScroll = $(window).scrollTop();
    let didScroll = false;
    const mainNavbar = '#navbarNav'
    $('#main-header .navbar-toggler').click(function(e){
        const mainNavbar = $(this).attr('data-bs-target');
        if($('.page-tutorial').length){
            if($(this).hasClass('collapsed')){

            } else {
                $('.side-menu-col').toggleClass('open');
                console.log(target);
                $(mainNavbar).removeClass('show');
            }
        }
        $('#main-header').toggleClass('open');
        $('body').toggleClass('static');
    })

    setTimeout(function(){
        $navbar = $('#main-header');
        if(window.pageYOffset === 0){
            $navbar.removeClass("reveal");
            $navbar.removeClass("vanish");
            $navbar.addClass("top");
        } else {
            $navbar.addClass("reveal");
            $navbar.removeClass("vanish");
            $navbar.removeClass("top");
        }
    }, 300);
    setInterval(function(){
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            $navbar = $('#main-header');

            if (prevScrollpos > currentScrollPos) {
                if (currentScrollPos === 0) {
                    $navbar.addClass("top").removeClass("reveal").removeClass("vanish");
                } else {
                    $navbar.addClass("reveal").removeClass("vanish").removeClass("top");
                }
            } else {
                $navbar.addClass("vanish").removeClass("reveal").removeClass("top");
            }
        };
    },300);

    $('.page-tutorial .tutorial-side-menu-header .close-button-container .close-button').click(function(){
        $('.side-menu-col').removeClass('open');
        $('body').removeClass('static');
        $('.navbar-toggler').addClass('collapsed');
        $(mainNavbar).removeClass('show');
    });

    $('.tutorial-side-menu-header .back-to-menu-button').click(function(){
        $('.navbar-toggler').removeClass('collapsed');
        $('#main-header .navbar-collapse').addClass('show');

        $('.side-menu-col').removeClass('open');
        $('#main-header').addClass('open');
    })
})
