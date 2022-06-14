$(document).ready(function () {

    function copyToClipboard(text) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
    }

    //handle double tap
    var timer = 0;
    $('.cover-wrapper').on("click", function () {
        if (timer == 0) {
            timer = 1;
            timer = setTimeout(function () { timer = 0; }, 500);
        }
        else {
            copyToClipboard('https://abgar.bar/');
            $('.copy-link-modal').fadeIn(300);
            timer = 0;
        }
    });

    $('.copy-icon').on("click", function () {
        copyToClipboard('https://abgar.bar/');

    });

    //close copy modal
    $('#close-copy-link-widget-button').on('click', function () {
        $('.copy-link-modal').fadeOut(300)
    })

});
