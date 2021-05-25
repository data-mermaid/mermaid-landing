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
            $parent.find(".image.filter").not('.' + value).hide('3000');
            $parent.find('.image.filter').filter('.' + value).show('3000');

        }
        if ($parent.find(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
});
