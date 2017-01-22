$(function() {
    $('.content').each(function() {
        var this_content = $(this);
        var str = this_content.text();
        var content = this_content.html();
        var img_url = str.substring(str.lastIndexOf("%") + 1, str.lastIndexOf(";"));
        var content_text = content.substring(content.lastIndexOf(";") + 1, content.length);
        this_content.html('<div class="post-thumbnail" style="background-image:url(\'' + img_url + '\')"></div>' + content_text);
    });
    $('.poet-read-more').each(function() {
        var this_read_more = $(this);
        var this_a = this_read_more.find('a');
        this_a.text('Les mer');
        this_a.append('<i class="material-icons" style="vertical-align:middle">&#xE315;</i>');
    })
})
