$(function() {
    $('.ferdighet').each(function() {
        var ferdighet = $(this);
        var ferdighet_tittel = $(this).data('ferdighettittel');
        var ferdighet_verdi = $(this).data('ferdighetverdi');

        $(this).html('<div class="row"><div class="col-md-4"><div class="ferdighet-tittel">' + ferdighet_tittel + '</div></div><div class="col-md-8"><div class="ferdighet-bar"></div></div>');
        $(this).find('.ferdighet-bar').width(ferdighet_verdi + '%');
    });
});
