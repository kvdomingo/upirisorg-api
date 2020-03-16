/* jshint esversion: 6 */

var cl = new cloudinary.Cloudinary({
    cloud_name: "kdphotography-assets",
    secure: true,
});

const img_dir = "upirisorg/web/static/web/media/private";

document.addEventListener("DOMContentLoaded", () => {
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
