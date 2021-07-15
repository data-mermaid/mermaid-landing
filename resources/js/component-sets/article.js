$(function () {
    $('.article a').on("mouseover mouseleave", function(){
        $(this).parents('.article').toggleClass('hover');
    });
});
