$(function(){
    let oldScroll = $(window).scrollTop();
    $(window).scroll(function() {
        didScroll = true;
    });

    /*throttling the scroll function*/
    setInterval(function(){
        if(didScroll){
            didScroll = false;

            /* if scrolled past main header show sticky header*/
            // if ($(this).scrollTop() > 150){
            //     $('#sticky-header').addClass("sticky");
            // }
            // else{
            //     $('#sticky-header').removeClass("sticky");
            // }

            /* if scroll up show sticky header*/
            if(oldScroll > $(this).scrollTop()){
                $('#sticky-header').addClass("sticky");
            } else {
                $('#sticky-header').removeClass("sticky");
            }
            oldScroll = $(window).scrollTop();
        }
    }, 250);
})
