$(document).ready(function(){



	var audio = new Audio('http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav');
 	

	$('#triangle-right').click(function() {
  		if (audio.paused == false) {
      		audio.pause();
      			
  		} else {
      		audio.play();
      		
  		}
	});
	
});

