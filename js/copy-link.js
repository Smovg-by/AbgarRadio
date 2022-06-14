$(document).ready(function () {

//     var timer = 0;
//   $('.cover-wrapper').on("click", function () {
//     if (timer == 0) {
//       timer = 1;
//       timer = setTimeout(function () { timer = 0; }, 500);
//     }
//     else { $(this).addClass('invisible'); timer = 0; }
//   });

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
            // $(this).addClass('invisible');
            $('.copy-link-modal').fadeIn(300);
            // $('.cover-wrapper').fadeOut(300);
            timer = 0;
        }
    });

    //close copy modal
    $('#close-copy-link-widget-button').on('click', function () {
        $('.copy-link-modal').fadeOut(300)
    })



});
