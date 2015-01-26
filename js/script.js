$(document).ready(function(){



	

//testing passing in variables

	var mouse = "RRRRRRRRRRRRRRRRRR";
	var armpit = "testfoo";

	$('#title').append("<div id='"+armpit+"'>"+mouse+"</div>");

//Testing creating an object below

	function frog(name, sciName, pic, info) {
    this.name = name;
    this.sciName = sciName;
    this.pic = pic;
    this.info = info;
    //this.audio = audio:
}

// testing calling a property from an object
var frankFrog = new frog ("Frank", "alpha-frank", "images/Greenfrog1.jpg", "info")
$('#title').append("<div>"+frankFrog.name+"</div>");	


//testing real class
var zAmericanBullfrog = new frog ("American bullfrog", "(Rana catesbeiana)", "images/Americanbullfrog1.jpg","bla bla bla bla bla");

//test turning modal in to a jquary event
$('#frog-contain').click(function(){
	
	$('#kingModal').html('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" id="closeStyle" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button><h4 class="modal-title" id="myModalLabel">Street Name</h4></div><div class="modal-body"><div id="workFucker"><p class="popSci-Name">(Sci-Name)</p><div class="frogpic"><img id="Americanbullfrog"src="images/Americanbullfrog1.jpg"><div id="play-button"><div id="triangle-right"></div></div></div><p class="info">This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like theyre actually proud of that shit.</p><div id="Test123"></div></div></div></div></div></div>');


var audio = new Audio('http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav');
 	

	$('#triangle-right').click(function() {
  		if (audio.paused == false) {
      		audio.pause();
      			
  		} else {
      		audio.play();
      		
  		}
	});

	$('#closeStyle').click(function(){
		audio.pause();
		audio.currentTime = 0;
	});
});




});

