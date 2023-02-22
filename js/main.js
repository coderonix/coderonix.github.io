function initGoogleMap() {
    var googleMapCenterPosition = new google.maps.LatLng(50.6199, 26.251617),
        googleMapOptions = {
            zoom: 5,
            center: googleMapCenterPosition,
            scrollwheel: false,
            styles: [{
                featureType: 'landscape',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'transit',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }, {featureType: 'poi',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.icon',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                stylers: [{
                    hue: '#00aaff'
                }, {
                    saturation: -100
                }, {
                    gamma: 2.15
                }, {
                    lightness: 12
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    visibility: 'on'
                }, {
                    lightness: 24
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    lightness: 57
                }]
            }]
        },
        element = document.getElementById('map'),
        googleMap = new google.maps.Map(element, googleMapOptions);

    new google.maps.Marker({
        position: googleMapCenterPosition,
        map: googleMap,
        icon: 'images/map_marker.png'
    });
}

$(document).ready(function() {
    $('.animate-box').waypoint(function (direction) {
        if (direction !== 'down' || !$(this.element).hasClass('animated-fast')) {
            $(this.element).addClass('item-animate');

            setTimeout(function () {
                $('body .animate-box.item-animate').each(function (i) {
                    var $elem = $(this);
                    setTimeout(function () {
                        var effect = $elem.data('animate-effect');
                        if (effect === 'fadeIn') {
                            $elem.addClass('fadeIn animated-fast');
                        } else if (effect === 'fadeInLeft') {
                            $elem.addClass('fadeInLeft animated-fast');
                        } else if (effect === 'fadeInRight') {
                            $elem.addClass('fadeInRight animated-fast');
                        } else {
                            $elem.addClass('fadeInUp animated-fast')
                        }

                        $elem.removeClass('item-animate');
                    }, 100 * i, 'easeInOutExpo');
                });
            }, 50);
        }
    }, {
        offset: '85%'
    });

    $('.js-gotop').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('html').offset().top
        }, 500, 'easeInOutExpo');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.js-top').addClass('active');
        } else {
            $('.js-top').removeClass('active');
        }
    });

    $('.fh5co-loader').fadeOut('slow');

    if (!$.browser.mobile) {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    }

    $(window).stellar();

    var $skills = $('#fh5co-skills');
    if ($skills.length > 0) {
        $skills.waypoint(function (direction) {
            if (direction !== 'down' || !$(this.element).hasClass('animated')) {
                setTimeout(function () {
                    $('.chart').easyPieChart({
                        scaleColor: false,
                        lineWidth: 4,
                        lineCap: 'butt',
                        barColor: '#FF9000',
                        trackColor: '#f5f5f5',
                        size: 160,
                        animate: 1000
                    })
                }, 400);

                $(this.element).addClass('animated');
            }
        }, {
            offset: '90%'
        });
    }
});
