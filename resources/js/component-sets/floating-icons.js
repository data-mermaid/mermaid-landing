// import Parallax from 'parallax-js';
// import $ from 'jquery';
// window.$ = window.jQuery = $;
//
//
// $(function(){
//     $('.floating-icons svg g').each(function(index, el){
//         const floatingIconsParallax = new Parallax(el);
//     });
// });
//
$(function() {
    if($(window).width() > 1023) {
        $('.floating-icons').each(function (index, el) {
            var rect = $(this).parent()[0].getBoundingClientRect();
            var mouse = {x: 0, y: 0, moved: false};

            $(this).parent().mousemove(function (e) {
                mouse.moved = true;
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            TweenLite.ticker.addEventListener('tick', function () {
                if (mouse.moved && $(window).width() > 1024) {
                    parallaxIt(".floating-icons path:nth-child(1)", 10);
                    parallaxIt(".floating-icons path:nth-child(2)", 20);
                    parallaxIt(".floating-icons path:nth-child(3)", 30);
                    parallaxIt(".floating-icons path:nth-child(4)", 40);
                    parallaxIt(".floating-icons path:nth-child(5)", 50);
                    parallaxIt(".floating-icons path:nth-child(6)", 60);
                    parallaxIt(".floating-icons path:nth-child(7)", 70);
                    parallaxIt(".floating-icons path:nth-child(8)", 10);
                    parallaxIt(".floating-icons path:nth-child(9)", 20);
                    parallaxIt(".floating-icons path:nth-child(10)", 30);
                    parallaxIt(".floating-icons path:nth-child(11)", 40);
                    parallaxIt(".floating-icons path:nth-child(12)", 50);
                    parallaxIt(".floating-icons path:nth-child(13)", 60);
                    parallaxIt(".floating-icons path:nth-child(14)", 70);
                    parallaxIt(".floating-icons circle", 60);
                }
                mouse.moved = false;
            });

            function parallaxIt(target, movement) {
                TweenMax.to(target, 0.5, {
                    x: (mouse.x - rect.width / 2) / rect.width * movement,
                    y: (mouse.y - rect.height / 2) / rect.height * movement
                });
            }
        })
    }

    /* parallax scroll */
    if ($(window).width() < 1024) {
        var controller = new ScrollMagic.Controller();
        var tween = new TimelineMax()
            .add([
                TweenMax.fromTo(".floating-icons path:nth-child(1)", 1, {top: 0}, {y: 60, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(2)", 1, {top: 0}, {y: 60, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(3)", 1, {top: 0}, {y: 40, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(4)", 1, {top: 0}, {y: 40, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(5)", 1, {top: 0}, {y: 60, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(6)", 1, {top: 0}, {y: 60, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(7)", 1, {top: 0}, {y: 80, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(8)", 1, {top: 0}, {y: 80, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(9)", 1, {top: 0}, {y: 100, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(10)", 1, {top: 0}, {y: 100, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(11)", 1, {top: 0}, {y: 120, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(12)", 1, {top: 0}, {y: 120, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(13)", 1, {top: 0}, {y: 140, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons path:nth-child(14)", 1, {top: 0}, {y: 140, ease: Linear.easeNone}),
                TweenMax.fromTo(".floating-icons circle", 1, {top: 0}, {y: 160, ease: Linear.easeNone})
            ]);

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: ".floating-icons", duration: $('.floating-icons').height()})
            .setTween(tween)
            .addTo(controller);
    }
})

// var rect = $('.floating-icons').parent()[0].getBoundingClientRect();
// var mouse = {x: 0, y: 0, moved: false};
//
// $('.floating-icons').parent().mousemove(function(e) {
//     mouse.moved = true;
//     mouse.x = e.clientX - rect.left;
//     mouse.y = e.clientY - rect.top;
// });
//
// TweenLite.ticker.addEventListener('tick', function(){
//     if (mouse.moved && $(window).width() > 768){
//         // parallaxIt(".floating-icons path:nth-child(1)", 5);
//         // parallaxIt(".floating-icons path:nth-child(2)", 5);
//         // parallaxIt(".floating-icons path:nth-child(3)", 10);
//         // parallaxIt(".floating-icons path:nth-child(4)", 10);
//         // parallaxIt(".floating-icons path:nth-child(5)", 15);
//         // parallaxIt(".floating-icons path:nth-child(6)", 15);
//         // parallaxIt(".floating-icons path:nth-child(7)", 20);
//         // parallaxIt(".floating-icons path:nth-child(8)", 20);
//         // parallaxIt(".floating-icons path:nth-child(9)", 5);
//         // parallaxIt(".floating-icons path:nth-child(10)", 5);
//         // parallaxIt(".floating-icons path:nth-child(11)", 10);
//         // parallaxIt(".floating-icons path:nth-child(12)", 10);
//         // parallaxIt(".floating-icons path:nth-child(13)", 15);
//         // parallaxIt(".floating-icons path:nth-child(14)", 15);
//         // parallaxIt(".floating-icons circle", 10);
//
//         parallaxIt(".floating-icons path:nth-child(1)", 10);
//         parallaxIt(".floating-icons path:nth-child(2)", 20);
//         parallaxIt(".floating-icons path:nth-child(3)", 30);
//         parallaxIt(".floating-icons path:nth-child(4)", 40);
//         parallaxIt(".floating-icons path:nth-child(5)", 50);
//         parallaxIt(".floating-icons path:nth-child(6)", 60);
//         parallaxIt(".floating-icons path:nth-child(7)", 70);
//         parallaxIt(".floating-icons path:nth-child(8)", 80);
//         parallaxIt(".floating-icons path:nth-child(9)", 90);
//         parallaxIt(".floating-icons path:nth-child(10)", 10);
//         parallaxIt(".floating-icons path:nth-child(11)", 20);
//         parallaxIt(".floating-icons path:nth-child(12)", 30);
//         parallaxIt(".floating-icons path:nth-child(13)", 40);
//         parallaxIt(".floating-icons path:nth-child(14)", 50);
//         parallaxIt(".floating-icons circle", 100);
//     }
//     mouse.moved = false;
// });
//
// function parallaxIt(target, movement) {
//     TweenMax.to(target, 0.5, {
//         x: (mouse.x - rect.width / 2) / rect.width * movement,
//         y: (mouse.y - rect.height / 2) / rect.height * movement
//     });
// }
