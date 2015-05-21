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
$("#mainlogo").fadeIn(4000);







