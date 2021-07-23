$(function () {
    let oldScroll = $(window).scrollTop();
    let didScroll = false;

    $('#main-header .navbar-toggler').click(function(){
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
})
