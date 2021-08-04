import Dotdotdot from 'dotdotdot-js';

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

    $('.share-button-container').css('margin-top',
        $('.title').height() + $('.meta').height());

    // dotdotdot on article list pate
    $('.article-list-page .article .title').each(function(){
        $(this).dotdotdot({
            fallbackToLetter: true,
            watch: true,
        });
    });

    // dotdotdot on homepage
    $('.page-home .story .title').each(function(){
        $(this).dotdotdot({
            fallbackToLetter: true,
            watch: true,
        });
    });

    /*dotdotdot on related article*/
    $('.related .article .title').each(function(){
        $(this).dotdotdot({
            fallbackToLetter: true,
            watch: true,
        });
    });
});

