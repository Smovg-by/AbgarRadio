$(document).ready(function () {

    $('#track-image').css('background-image', $('#radioheart-player-logo').css('background-image'));

    var metaArtist = '';
    var metaImage = '';
    var metaSongName = '';

    function updateMediaSession() {
        if ('mediaSession' in navigator) {
            if (metaImage == '') {
                metaImage = 'https://abgar.bar/images/logo-500x500.jpg';
            }
            else {
                metaImage = metaImage.slice(4, -1).replace(/"/g, "");
            }
            navigator.mediaSession.metadata = new MediaMetadata({
                title: metaSongName,
                artist: metaArtist,
                artwork: [
                    { src: metaImage, sizes: '96x96', type: 'image/jpg' }
                ]
            });
        }
    }

    // Update background image.
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutationRecord) {
            var imageUrl = $(mutationRecord.target).css('background-image');
            $('#bg-image-holder').css('background-image', imageUrl);
            $('#bg-image-holder-modal').css('background-image', imageUrl);
            $('#bg-image-holder-menu').css('background-image', imageUrl);
            $('#track-image').css('background-image', imageUrl);
            metaImage = imageUrl;
            updateMediaSession();
        });
    });

    var target = document.getElementById('radioheart-player-logo');
    observer.observe(target, { attributes: true, attributeFilter: ['style'] });

    $('#radioheart-player-play').click(function () {
        $('.spinner').removeClass('invisible')
    })

    //Update track name.
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutationRecord) {
            var songName = $(mutationRecord.target).attr('data-marquee').split('-');

            if (songName[0]) {
                $('#song-artist').text(songName[0].trim());
                metaArtist = songName[0].trim();
            }
            if (songName[1]) {
                $('#song-name').text(songName[1].trim());
                metaSongName = songName[1].trim();
            }

            setTimeout(() => {
                $('.spinner').addClass('invisible')
            }, 800)

            updateMediaSession();
        });
    });

    var target = document.getElementById('radioheart-player-current-song');
    observer.observe(target, { attributes: true, attributeFilter: ['data-marquee'] })

});