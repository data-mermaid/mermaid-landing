$(function(){
    if (localStorage.getItem('cookieSeen') !== 'shown') {
        $('#cookie-consent-banner').removeClass('hidden');
    }

    $('#cookie-accept').click(function() {
        $('#cookie-consent-banner').addClass('hidden');
        localStorage.setItem('cookieSeen','shown')
    });
});
