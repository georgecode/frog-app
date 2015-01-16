$(document).ready(function(){
	var silent = '<audio autoplay> <source src="#" type="audio/wav"></audio>'

	var froggy = '<audio autoplay> <source src="http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav" type="audio/wav"></audio>' 					   
	$('#triangle-right').click(function() {
    $(this).html(froggy);

	});
	
});

