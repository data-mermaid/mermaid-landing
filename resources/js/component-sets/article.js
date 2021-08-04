import Dotdotdot from 'dotdotdot-js';

$(function () {
    $('body')
        .on('mouseover mouseleave', '.article a', function(){
        $(this).parents('.article').toggleClass('hover');
        })
        .on('mouseover mouseleave', '.publication a', function(){
            $(this).parents('.publication').toggleClass('hover');
        })


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

    // dotdotdot
    $('.dotdotdot').each(function(){
        $(this).dotdotdot({
            fallbackToLetter: true,
            watch: true,
        });
    });
});

