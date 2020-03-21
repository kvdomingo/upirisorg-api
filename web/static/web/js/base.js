/* jshint esversion: 6 */
var cl = new cloudinary.Cloudinary({
    cloud_name: "kdphotography-assets",
    secure: true,
});

const img_dir = "upirisorg/web/static/web/media/private";

document.addEventListener("DOMContentLoaded", () => {
    $("body").removeClass("fade-out");
    $("a").each(function() {
        $(this).on('click', function() {
            if (($(this)[0].hasAttribute("href")) && ($(this).first().attr("href") !== "#")) {
                $('body').addClass('fade-out');
            }
        });
    });
});
