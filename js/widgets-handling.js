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
});