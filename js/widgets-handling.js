$(function () {
    'use strict';

    $('#next-button').on('click', function (e) {
        $("#next-widget span").trigger('click')
    });
    $('#recently-button').on('click', function (e) {
        $("#recently-widget span").trigger('click')
    });
    $('#order-button').on('click', function (e) {
        $("#order-widget span").trigger('click')
    });

    //share modal
    $('#share-button').on('click', function (e) {
        $('.share-modal').fadeIn(300)
    });
    $('#close-share-widget-button').on('click', function (e) {
        $('.share-modal').fadeOut(300)
    });

    //donate modal
    $('#donate-button').on('click', function (e) {
        $('.donate-modal').fadeIn(300)
    });
    $('#close-donate-widget-button').on('click', function (e) {
        $('.donate-modal').fadeOut(300)
    });

    //hide all modals on screen tap
    $('.widget__modal-background').on('click', function () {
        $(".donate-modal").fadeOut(300);
        $(".share-modal").fadeOut(300);
        $(".copy-link-modal").fadeOut(300);
        // $('.footer-menu__item > svg').attr("style", "color: rgba(255, 255, 255, 0.5)");
    })

    //change icon colors on hover
    $('.footer-menu__item > svg').mouseenter(function () {
        $(this).attr("style", "color: white");
    })
    $('.footer-menu__item > svg').mouseleave(function () {
        $(this).attr("style", "color: rgba(255, 255, 255, 0.5)");
    })
});