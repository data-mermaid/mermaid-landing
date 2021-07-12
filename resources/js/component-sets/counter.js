import counterUp from './counterup2';
require( 'waypoints/lib/noframework.waypoints.js' );

$(function () {
    var $counters = $(".counter");

    /* Start counting, do this on DOM ready or with Waypoints. */
    $counters.each(function (ignore, counter) {
        var counted = false;
        var waypoint = new Waypoint( {
            element: $(this)[0],
            handler: function(direction) {
                if(!counted && direction === 'down') {
                    counted = true;
                    counterUp(counter, {
                        duration: 1500,
                    });
                }
            },
            offset: 'bottom-in-view',
        } );
    });

});
