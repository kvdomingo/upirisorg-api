/* jshint esversion: 6 */

var cl = new cloudinary.Cloudinary({
    cloud_name: "kdphotography-assets",
    secure: true,
});

document.addEventListener("DOMContentLoaded", () => {
    const img_dir = "upirisorg/web/static/web/media/private";
    img_url = cl.url(`${img_dir}/index-cover.png`, {
        secure: true,
    });

    $('.card-image').attr("style", `background-image: url('${img_url}');`).addClass('cover-photo');

    $('div.cl').each(function(i, v) {
        if (i + 1 !== 3) {
            img_tag = cl.imageTag(`${img_dir}/index-block${i + 1}.jpg`, {
                secure: true,
                transformation: [
                    {
                        crop: 'scale',
                        width: 768,
                        dpr: 'auto',
                    },
                ],
            }).toHtml();
            var max_width = 90;
        } else {
            img_tag = cl.imageTag(`${img_dir}/index-block${i+1}.jpg`, {
                secure: true,
                transformation: [
                    {
                        crop: 'scale',
                        width: 1080,
                        dpr: 'auto',
                    },
                ],
            }).toHtml();
            var max_width = 100;
        }
        $(this).html(img_tag);
        $('img').attr("style", `
            max-width: ${max_width}%;
            height: auto;
        `);
    });
});
