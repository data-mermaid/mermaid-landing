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
})
