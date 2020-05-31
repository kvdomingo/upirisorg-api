/* jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", () => {
    $("div.cl").find("img").each(function(i, v) {
        src_url = $(this).attr("src");
        img_url = cl.url(src_url, {
            secure: true,
            transformation: [
                {
                    crop: 'scale',
                    width: 'auto',
                },
            ],
        });
        $(this).attr("class", "cld-responsive").attr("data-src", img_url);
    });
});

$(document).on('load', function() {
    var $grid = $(".grid").masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.gridSizer'
    });

    $grid.imagesLoaded().progress(function() {
        $grid.masonry();
    });
});
