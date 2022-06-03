$(function () {
    'use strict';

    // Плашечки-хуяшечки
    // var platesList = {
    //     // 'ID селектор' : 'id кукиса',
    //     //'modal-selector': 'best-music-2021'
    // };

    // Отображаем все плашки что есть лесенкой
    // По-умолчанию у плашки должен быть display:none;
    // for (var plate in platesList) {
    //     // console.log(plate);

    //     if (!Cookies.get(platesList[ plate ])) {
    //         $('#'+plate).show();
    //     }
    // }

    // Обрабатываем кнопку отключения плашки
    // <a href='#' class='plate_close_button' data-plate='ID селектора'>
    //---------------
    // plate_close_button - пустой ксс класс для
    // хука на кнопку плашки, не стоит вешать на него стили
    // $('.plate_close_button').on('click', function (e) {
    //     e.preventDefault();

    //     var plateId = $(this).data('plate');
    //     if (plateId != '') {
    //         Cookies.set(platesList[ plateId ], 'shown', { expires: 730 });
    //         $('#'+plateId).hide();
    //     }
    // });


    $('.side-menu__toggle-button').on('click', function (e) {
        e.preventDefault();

        var $button = $(this);
        var $menu = $('.side-menu');
        var $content = $('#content');

        $button.toggleClass('side-menu__toggle-button_open');
        $button.toggleClass('side-menu__toggle-button_closed');

        if ($button.hasClass('side-menu__toggle-button_open')) {
            // $(window).scrollTop(0); // Если этого нету - страницу можно промотать вниз и увидеть анимацию

            $menu.addClass('side-menu__slide_in');
            $menu.removeClass('side-menu__slide_out');

            $menu.show();

            // Скрываем контент
            // setTimeout(function () {
            //     if ($button.hasClass('side-menu__toggle-button_open')) {
            //         $content.hide();
            //     }
            // }, 1100);
        } else {
            $content.show();

            $menu.removeClass('side-menu__slide_in');
            $menu.addClass('side-menu__slide_out');

            // $menu.hide();
        }
    });
});