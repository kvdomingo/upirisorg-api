/* jshint esversion: 6 */
var cl = new cloudinary.Cloudinary({
    cloud_name: "kdphotography-assets",
    secure: true,
});

const img_dir = "upirisorg/web/static/web/media/private";

document.addEventListener("DOMContentLoaded", () => {
    // $("body").removeClass("fade-out");
    // $("a").each(function() {
    //     $(this).on('click', function() {
    //         is_href = $(this)[0].hasAttribute("href");
    //         valid_href = $(this).first().attr("href") !== "#";
    //         is_target = $(this)[0].hasAttribute("target");
    //         targets_in = $(this).first().attr("target") !== "_blank";
    //         if ((is_href && valid_href) || (is_target && targets_in)) {
    //             $('body').addClass('fade-out');
    //         }
    //     });
    // });
});
