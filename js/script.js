(function ($) {
    "use strict";

    // Windows load

    $(window).on("load", function () {

        // Site loader 

        // $(".loader-inner").fadeOut();
        $(".loader").delay(300).fadeOut("slow");


        // Set the date we're counting down to
        var countDownDate = new Date("Jan 20, 2021 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)) || 0;
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || 0;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) || 0;
            var seconds = Math.floor((distance % (1000 * 60)) / 1000) || 0;

            // Output the result in an element with id="demo"
            document.querySelector(".days").innerHTML = days + "<span class='count-label'>day</span>"
            document.querySelector(".hours").innerHTML = hours + "<span class='count-label'>hour</span>"
            document.querySelector(".mins").innerHTML = minutes + "<span class='count-label'>minute</span>"
            document.querySelector(".secs").innerHTML = seconds + "<span class='count-label'>second</span>"

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                // document.querySelector(".counter").innerHTML = "HAPPILY MARRIED!";
                $(".counter").html("<div class='counter-end'>Happily Married Now!</div>")
            }
        }, 1000);

    });



    // Site navigation setup

    var header = $('.header'),
        pos = header.offset();

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + 50 && header.hasClass('default')) {
            header.fadeOut('fast', function () {
                $(this).removeClass('default').addClass('switched-header').fadeIn(200);
                $('.scroll-to-top').addClass('active');
            });
        } else if ($(this).scrollTop() <= pos.top + 50 && header.hasClass('switched-header')) {
            header.fadeOut('fast', function () {
                $(this).removeClass('switched-header').addClass('default').fadeIn(100);
                $('.scroll-to-top').removeClass('active');
            });
        }
    });


    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -180
    });


    //Popup elements

    $('.popup-image').magnificPopup({
        type: 'image',
        fixedContentPos: false,
        fixedBgPos: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });


    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    // Show embed video 

    var playVideo = $('.video-cover .play-but')
    $('.video-cover').each(function () {
        if ($(this).find('iframe').length) {
            $(this).find('iframe').attr('data-src', $(this).find('iframe').attr('src'), $(this).find('iframe').attr('src', ''));

        }

    });

    playVideo.on("click", function () {
        var blockVideo = $(this).closest('.video-cover');
        var iframeInstance = blockVideo.find('iframe');
        blockVideo.addClass('show-video');
        iframeInstance.attr('src', iframeInstance.attr('data-src'));
        return false;

    });



    // Instagram feed setup

    // var instaFeed = new Instafeed({
    //     get: 'user',
    //     userId: '13339175373',
    //     accessToken: '13339175373.95cbc68.b63a06b452874b6e8384eebc29a005ce',
    //     limit: 5,
    //     resolution: 'standard_resolution',
    //     template: '<li><a class="hover-effect rounded-circle" target="_blank" href="{{link}}"><span class="hover-effect-container"><span class="hover-effect-icon hover-effect-icon-small"><span class="fa fa-heart hover-effect-icon-inner"></span></span></span></span><img class=" mw-100" src="{{image}}" /></a></li>'
    // });
    // instaFeed.run();




    // Countdown setup

    $('.countdown').countdown('2019/6/2').on('update.countdown', function (event) {
        var $this = $(this).html(event.strftime(''
            + '<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1 ">%d</span> <span class="label ">Day%!d</span></div></div> '
            + '<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%H</span> <span class="label">Hour%!H</span></div></div> '
            + '<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%M</span> <span class="label">Minute%!M</span></div></div> '
            + '<div class="col"><div class="card card-body countdown-shadow p-3"><span class="counter text-primary mb-1">%S</span> <span class="label">Second%!S</span></div></div>'));
    });


})(jQuery);