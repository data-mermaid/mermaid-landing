$(function () {
    let index = 0;
    $('.fnoteWrap').each(function () {
        index++;
        $this = $(this);
        let content = $(this).find('.fnoteBtn').attr('data-content');

        const btnEl = `<a href="#footnote-content-` + index + `"><sup>` + index + `</sup></a>`
        const footnoteEl = `
            <div class="footnote" id="footnote-content-` + index + `">
                <sup class="index">` + index + `</sup>
                <span>` + decodeURI(content) + `</span>
            </span>
        `;
        $(this).html(btnEl)
        $('.footnotes').append(footnoteEl);
    });
    if($('.fnoteWrap').length === 0){
        $('.footnotes').hide();
    }
});
