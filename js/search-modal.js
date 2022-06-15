$(function () {
    "use strict";

    // if ($("#song-name").text().length > 1) {
    //     $("#search-button").click(function () {
    //       $("#search_container").fadeToggle(300);
    //     });
    //   }

    const linksData = [
        {
            source: "Google",
            id: "link_google",
            href: "https://www.google.com/search?newwindow=1&q=",
        },
        {
            source: "Spotify",
            id: "link_spotify",
            href: "https://open.spotify.com/search/",
        },
        {
            source: "Яндекс.Музыка",
            id: "link_yandex",
            href: "https://music.yandex.ru/search?text=",
        },
        {
            source: "VK",
            id: "link_vk",
            href: "https://vk.com/search?c%5Bq%5D=",
        },
        {
            source: "YouTube",
            id: "link_youtube",
            href: "https://www.youtube.com/results?search_query=",
        },
        {
            source: "Deezer",
            id: "link_deezer",
            href: "https://www.deezer.com/search/",
        },
        {
            source: "SoundCloud",
            id: "link_soundcloud",
            href: "https://soundcloud.com/search?q=",
        },
        {
            source: "Last.fm",
            id: "link_lastfm",
            href: "https://www.last.fm/search?q=",
        },
    ];

    function generateList(rootElement, linksData, querystring) {

        linksData.forEach(function (link) {
            let element = document.createElement("a");
            element.innerHTML = link.source;
            element.setAttribute("id", link.id);
            element.setAttribute("target", "_blank");
            element.setAttribute("href", link.href + querystring);

            rootElement.appendChild(element);
        });
    }

    $("#search-button").on("click", function (e) {

        const artist = $("#song-artist").text();
        const song = $("#song-name").text();

        if (song.length > 1) {
            $(".search_container").fadeToggle(300);

            if ($('#search-icon').attr("style") == 'color: white') {
                $('#search-icon').attr("style", "color: rgba(255, 255, 255, 0.5)");
            } else {
                $('#search-icon').attr("style", "color: white");
            }

        }

        $(".search_container > a").remove();

        const querystring = (artist + "-" + song)
            .split(" ")
            .join("%20");

        const rootElement = document.querySelector(".search_container");

        generateList(rootElement, linksData, querystring);
    });
});
