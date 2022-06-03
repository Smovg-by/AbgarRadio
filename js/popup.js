$('.iphone_description').click(function (e) {
    e.preventDefault();
    $('.side-menu').addClass('invisible')
    $('.cover-wrapper').addClass('invisible')
    $('.side-menu__toggle-button').addClass('invisible')
    $('.bi').addClass('invisible')
    $('.iphone').removeClass('hidden')
    $('.modal-bg').addClass('active')
});

$('.close-popup').click(function () {
    $('.modal-bg').removeClass('active')
    $('.iphone').addClass('hidden')
    $('.side-menu').removeClass('invisible')
    $('.cover-wrapper').removeClass('invisible')
    $('.side-menu__toggle-button').removeClass('invisible')
    $('.bi').removeClass('invisible')
});

$('.android_description').click(function (e) {
    e.preventDefault();
    $('.side-menu').addClass('invisible')
    $('.cover-wrapper').addClass('invisible')
    $('.side-menu__toggle-button').addClass('invisible')
    $('.bi').addClass('invisible')
    $('.modal-bg').addClass('active')
    $('.android').removeClass('hidden')

});

$('.close-popup').click(function () {
    $('.modal-bg').removeClass('active')
    $('.android').addClass('hidden')
    $('.side-menu').removeClass('invisible')
    $('.cover-wrapper').removeClass('invisible')
    $('.side-menu__toggle-button').removeClass('invisible')
    $('.bi').removeClass('invisible')
});