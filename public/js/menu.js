$(function() {
    var pathname = window.location.pathname;

    var menu_li = [];
    $('.nav li').each(function() {
        menu_li.push($(this));
        $(this).removeClass('active');
    });


    switch (pathname) {
        case '/om-oss':
            menu_li[0].addClass('active');
            break;
        case '/dokumentasjon':
            menu_li[1].addClass('active');
            break;
        default:
            menu_li[2].addClass('active');
            break;
    }
});
