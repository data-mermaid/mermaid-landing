import Parallax from 'parallax-js';
import $ from 'jquery';
window.$ = window.jQuery = $;


$(function(){
    $('.floating-icons svg g').each(function(index, el){
        const floatingIconsParallax = new Parallax(el);
    });
});

