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

    img_url = "https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.0-9/60627711_2460297753981013_8365258745302745088_n.jpg?_nc_cat=100&_nc_sid=ca434c&_nc_eui2=AeGGYE9ZP92ZI3vFVIvliZYnqNg8ntm6FNDfAUj105JQcpWxnTsynOxEFBkJrts1JZO9TnuCdfG43Ex-iY6t7ug91QctsS2uxfFyC2XBFouCTA&_nc_oc=AQmJEXonKe2o_I3FIKuZj7UUVjO-J20sZuZV3V9vXAsTmavwSR8hnC_R40-6u4ra8H0&_nc_ht=scontent.fcrk1-1.fna&oh=f329404be9f10aff9e397646ca0c48cf&oe=5E949C7B";
    $('.card-image').attr("style", `background-image: url('${img_url}');`).addClass('cover-photo');
});
