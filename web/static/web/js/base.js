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
            if ($(this)[0].hasAttribute("href")) {
                $('body').addClass('fade-out');
            }
        });
    });

    favicon = cl.url(`${img_dir}/logo.png`, {
        secure: true,
        transformation: [
            {
                crop: 'thumb',
                gravity: 'north',
                width: 32,
                height: 32,
                dpr: 'auto',
            },
        ],
    });
    $("link[rel='shortcut icon']").attr("href", favicon);

    card_img = cl.url(`${img_dir}/logo.png`, {
        secure: true,
        transformation: [
            {
                crop: 'thumb',
                width: 720,
                dpr: 'auto',
            },
        ],
    });
    $("meta[property='og:image']").attr("content", card_img);
    $("meta[name='twitter:image']").attr("content", card_img);

    img_tag = cl.imageTag(`${img_dir}/logo.png`, {
        secure: true,
        transformation: [
            {
                crop: 'scale',
                width: 100,
                dpr: 'auto',
            },
        ],
    }).toHtml();
    $('.cl').first().html(img_tag);
});
