$(document).ready(function () {
    let currentPage = 1;
    const totalPage = $('.changelog-pagination .page-number').length;
    pageChange(currentPage, false)

    $('.changelog-pagination .page-item.prev a').click(function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            $('.changelog-pagination .page-number[data-page="' + currentPage + '"]').removeClass('active');
            currentPage--;
            pageChange(currentPage);
        }
    });

    $('.changelog-pagination .page-item.next a').click(function (e) {
        e.preventDefault();
        if (currentPage < totalPage) {
            $('.changelog-pagination .page-number[data-page="' + currentPage + '"]').removeClass('active');
            currentPage++;
            pageChange(currentPage);
        }
    });

    $('.changelog-pagination .page-number a').click(function (e) {
        e.preventDefault();
        $('.changelog-pagination .page-number[data-page="' + currentPage + '"]').removeClass('active');
        currentPage = $(this).attr('data-page');
        pageChange(currentPage);

    });

    function pageChange(page, scrollTop = true) {
        page = parseInt(page);
        if (scrollTop) {
            $('html, body').animate({
                scrollTop: $('.changelogs').offset().top - 250
            }, 300);
        }

        $('.changelog-pagination .page-number').removeClass('hide');
        $('.changelog-pagination .page-number[data-page="' + page + '"]').addClass('active');
        $('.changelog-pagination .page-number[data-page="' + (page - 2) + '"]').prevAll('.page-number').addClass('hide');
        $('.changelog-pagination .page-number[data-page="' + (page + 2) + '"]').nextAll('.page-number').addClass('hide');

        if (page < 4) {
            $('.changelog-pagination .ellipsis-prev').addClass('hide');
        } else {
            $('.changelog-pagination .ellipsis-prev').removeClass('hide');
        }

        if (page > (totalPage - 3)) {
            $('.changelog-pagination .ellipsis-next').addClass('hide');
        } else {
            $('.changelog-pagination .ellipsis-next').removeClass('hide');
        }

        $('.changelogs .version').addClass('hide');

        for (let i = ((page - 1) * 3); i <= (page * 3) - 1; i++) {
            // console.log(i);
            $('.changelogs .version[data-index="' + i + '"]').removeClass('hide');
        }
    }
})
