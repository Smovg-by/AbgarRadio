$(function () {
    'use strict';

    $('.side-menu__toggle-button').on('click', function (e) {
        e.preventDefault();

        var $button = $(this);
        var $menu = $('.side-menu');
        var $content = $('#content');
        var $footer = $('.cover-container')

        $button.toggleClass('side-menu__toggle-button_open');
        $button.toggleClass('side-menu__toggle-button_closed');
        $footer.toggleClass('invisible');

        if ($button.hasClass('side-menu__toggle-button_open')) {

            $menu.addClass('side-menu__slide_in');
            $menu.removeClass('side-menu__slide_out');

            $menu.show();

        } else {
            $content.show();

            $menu.removeClass('side-menu__slide_in');
            $menu.addClass('side-menu__slide_out');
        }
    });
});