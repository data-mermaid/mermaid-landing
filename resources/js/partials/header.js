$(function () {
    let oldScroll = $(window).scrollTop();
    let didScroll = false;
    $(window).scroll(function () {
        didScroll = true;
    });

    /*throttling the scroll function*/
    setInterval(function () {
        if (didScroll) {
            didScroll = false;
            $stickyHeader = $('#sticky-header');
            /* if scrolled past main header show sticky header*/
            // if ($(this).scrollTop() > 150){
            //     $('#sticky-header').addClass("sticky");
            // }
            // else{
            //     $('#sticky-header').removeClass("sticky");
            // }
            if ($(this).scrollTop() > 300) {
                $('.scroll-button').css('opacity', 0);
            }
            /* if scroll up show sticky header*/
            if (oldScroll > $(this).scrollTop()) {
                if ($(this).scrollTop() < 80) {
                    $stickyHeader.removeClass("sticky");
                } else {
                    $stickyHeader.addClass("sticky");
                }
            } else {
                $stickyHeader.removeClass("sticky");
            }
            oldScroll = $(window).scrollTop();
        }
    }, 250);

    $('#main-header .navbar-toggler, #sticky-header .navbar-toggler').click(function(){
        $('#mobile-header').toggleClass('open')
    })

    $('#mobile-header .navbar-toggler').click(function(){
        $('#mobile-header').toggleClass('open')
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
})
