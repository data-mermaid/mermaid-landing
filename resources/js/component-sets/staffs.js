$(function(){
    $('.team .open-details').click(function(e){
        e.preventDefault();
        $('.staff, .team').removeClass('display-details');
        $(this).parents('.staff, .team').addClass('display-details');
    })
    $('.team .team-details .btn-close').click(function(){
        $(this).parents('.staff, .team').removeClass('display-details');
    });
});
