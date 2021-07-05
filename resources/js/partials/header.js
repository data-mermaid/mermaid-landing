$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150){
            $('#sticky-header').addClass("sticky");
        }
        else{
            $('#sticky-header').removeClass("sticky");
        }
    });

    // const $navbar = $("#main-header"),
    //     y_pos = $navbar.offset().top,
    //     height = $navbar.height();
    //
    // $(document).scroll(function() {
    //     var scrollTop = $(this).scrollTop();
    //
    //     if (scrollTop > y_pos + height) {
    //         $navbar.addClass("sticky").animate({
    //             top: 0
    //         });
    //     } else if (scrollTop <= y_pos) {
    //         $navbar.removeClass("sticky").clearQueue().animate({
    //             // top: "-48px"
    //         }, 0);
    //     }
    // });
})
