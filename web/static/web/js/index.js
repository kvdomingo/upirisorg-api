/* jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", () => {
    const img_dir = "upirisorg/web/static/web/media/private";
    img_url = cl.url(`${img_dir}/index-cover.png`, {
        secure: true,
        transformation: [
            {
                crop: 'scale',
                width: 'auto',
            },
        ],
    });

    img_url = "https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.0-9/60627711_2460297753981013_8365258745302745088_n.jpg?_nc_cat=100&_nc_sid=825194&_nc_oc=AQmzbosD8OB2FuTi2rAdOuXhakbQzgn9HDVfwQTfHvml7f7lTiJ93GO-vgcWgbIOkx8&_nc_ht=scontent.fcrk1-1.fna&oh=459f2708e21f6aa45cc50ebe25b4e863&oe=5EC01DFB";
    $('.card-image').attr("style", `background-image: url('${img_url}');`).addClass('cover-photo');

    $('div.cl').each(function(i, v) {
        img_url = cl.url(`${img_dir}/index-block${i+1}.jpg`, {
                secure: true,
                transformation: [
                    {
                        crop: 'scale',
                        width: 'auto',
                    },
                ],
            });
        $(this).find('img').attr("class", "cld-responsive").attr("data-src", img_url);
    });
});
