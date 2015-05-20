// My Scripts

//document.write("Hello World!");

// Media Element Player

$('audio,video').mediaelementplayer({
	success: function(player, node) {
	  $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
	},
	startLanguage: 'en',
	translationSelector: true
});







