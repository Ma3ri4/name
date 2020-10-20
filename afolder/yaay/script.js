
var player ;
var player1;

function onYouTubeIframeAPIReady() {
  player = new 
  YT.Player('player', {
		height: '390',
		width: '640',
		videoId:'u3N4tIuGhsM',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
  
  
	player1 = new YT.Player('player1', {
		height: '390',
		width: '640',
		videoId:'8nX76NFhpYs',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}


function onPlayerReady(event) {
	loopStart();
	player1.playVideo();
  player.playVideo();
}
function loopStart() {
	player1.seekTo(7);	
  player.seekTo(60);
}
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING) {
		setTimeout(loopStart, 5000); 
	}
}

