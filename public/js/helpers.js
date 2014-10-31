$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    if (options.url.indexOf('http') == -1) {
        options.url = 'http://api.westfield.io/api/' + options.url;
    }
});