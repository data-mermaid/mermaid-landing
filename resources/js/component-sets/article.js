$(function () {
    $('.article a').on("mouseover mouseleave", function(){
        $(this).parents('.article').toggleClass('hover');
    });
    var $temp = $("<input>");

    $('.copy-url-to-clipboard').click(function(e){
        e.preventDefault();
        var $this = $(this);
        $("body").append($temp);

        var $url = $this.attr('data-url');
        $temp.val($url).select();
        document.execCommand("copy");
        $temp.remove();

        $this.addClass('copied');
        setTimeout(function(){
            $this.removeClass('copied');
        }, 3000);

    })
});
