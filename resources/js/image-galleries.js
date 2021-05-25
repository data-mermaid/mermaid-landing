$(document).ready(function () {
    $(".image-galleries .filter-button").click(function () {
        const $parent = $(this).parent().closest('.image-galleries');
        const value = $(this).attr('data-filter');

        if (value === "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            // $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            // $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $parent.find(".filter").not('.' + value).hide('2000');
            $parent.find('.filter').filter('.' + value).show('2000');

        }
        if ($parent.find(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });

    const imagePopup = new bootstrap.Modal(document.getElementById('image-gallery-popup'));

    $('.image-galleries a.image').click(function () {
        const $popup = $('#image-gallery-popup');
        const imageUrl = $(this).attr('data-image');
        const title = $(this).attr('data-title');
        const caption = $(this).attr('data-caption');
        const copyright = $(this).attr('data-copyright');

        $popup.find('.image').html(`<img src="${imageUrl}"/ alt=${title}>`);
        $popup.find('.title').html(title);
        $popup.find('.caption').html(caption);
        $popup.find('.copyright').html(copyright);
        imagePopup.show();
    })
});
