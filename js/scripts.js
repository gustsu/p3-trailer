// My Scripts

//document.write("Hello World!");

// Media Element Player

$('audio,video').mediaelementplayer({
	success: function(player, node) {
	  $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
	},
    features:['playpause','progress','fullscreen'],
	startLanguage: 'en',
	translationSelector: true
});


$("#mainlogo").hide();
$("#mainlogo").fadeIn(2000);

$("#fade").hide();
$("#fade").slideDown(3000);

//credit to stack overflow for the smooth scrolls
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});






