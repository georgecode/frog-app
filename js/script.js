$(document).ready(function(){


//------This is the frog constructor
	function frog(name, sciName, imgId, pic, sound, info) {
    this.name = name;
    this.sciName = sciName;
    this.imgId= imgId
    this.pic = pic;
    this.info = info;
    this.sound = sound;
	}	


/*-------template for adding frogs----------

var z = new frog (
	"name", 
	"sciName", 
	"imgId",
	"pic",  
	"sound",
	"info");

------------template end-----------*/

//frog objects
var Americanbullfrog = new frog (
	"American bullfrog", 
	"Rana catesbeiana", 
	"Americanbullfrog",
	"images/Americanbullfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav",
	"info");

var Americantoad = new frog (
	"American toad", 
	"Bufo americanus", 
	"Americantoad",
	"images/Americantoad1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/american_toad.wav",
	"info");


var Carpenterfrog = new frog (
	"Carpenter frog", 
	"Rana virgatipes", 
	"Carpenterfrog",
	"images/Carpenterfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/carpenter_frog.wav",
	"info");

var Easternspadefoot = new frog (
	"Eastern spadefoot toad", 
	"Scaphiopus h. holbrookii", 
	"Easternspadefoot",
	"images/EasternSpadefoot1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/spadefoot_toad.wav",
	"info");

var Fowlerstoad = new frog (
	"Fowler’s toad", 
	"Bufo woodhousii fowleri", 
	"Fowlerstoad",
	"images/Fowlerstoad1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/fowlers_toad.wav",
	"info");

var Greenfrog = new frog (
	"Green frog", 
	"Rana clamitans melanota", 
	"Greenfrog",
	"images/Greenfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/green_frog.wav",
	"info");

var NewJerseychorusfrog = new frog (
	"New Jersey chorus frog", 
	"Pseudacris triseriata kalmi", 
	"NewJerseychorusfrog",
	"images/Newjerseychorusfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/nj_chorus_frog.wav",
	"info");

var Northerncricketfrog = new frog (
	"Northern cricket frog", 
	"Acris c. crepitans", 
	"Northerncricketfrog",
	"images/Northerncricketfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/no_cricket_frog.wav",
	"info");

var Northerngraytreefrog = new frog (
	"Northern gray treefrog", 
	"Hyla versicolor", 
	"Northerngraytreefrog",
	"images/Northerngreytreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/no_gray_frog.wav",
	"info");

var Northernspringpeeper = new frog (
	"Northern spring peeper", 
	"Pseudacris c. crucifer", 
	"Northernspringpeeper",
	"images/Northernspringpeeper1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/spring_peeper.wav",
	"info");

var Pickerelfrog = new frog (
	"Pickerel frog", 
	"Rana palustris", 
	"Pickerelfrog",
	"images/Pickerelfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/pickerel_frog.wav",
	"info");

var PineBarrenstreefrog = new frog (
	"Pine Barrens treefrog", 
	"Hyla andersonii", 
	"PineBarrenstreefrog",
	"images/PineBarrenstreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/pine_barrens_treefrog.wav",
	"info");

var Southerngraytreefrog = new frog (
	"Southern gray treefrog", 
	"Hyla chrysoscelis", 
	"Southerngraytreefrog",
	"images/Southerngreytreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/so_gray_treefrog.wav",
	"info");

var Southernleopardfrog = new frog (
	"Southern leopard frog", 
	"Rana utricularia", 
	"Southernleopardfrog",
	"images/Southernleopardfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/so_leopard_frog.wav",
	"info");

var Uplandchorusfrog = new frog (
	"Upland chorus frog", 
	"Pseudacris triseriata feriarum", 
	"Uplandchorusfrog",
	"images/Uplandchorusfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/upland_chorus_frog.wav",
	"info");

var Woodfrog = new frog (
	"Wood frog", 
	"Rana sylvatica", 
	"Woodfrog",
	"images/Woodfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/wood_frog.wav",
	"info");

	

//This is a function designed to create a modal and assign parameter's to it(its the frog popup) 
var modalPop = function(name, sciName, imgId, pic, info){
	return('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" id="closeStyle" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button><h4 class="modal-title" id="myModalLabel">'+name+'</h4></div><div class="modal-body"><div id="workPlease"><p class="popSci-Name">('+sciName+')</p><div class="frogpic"><img id="'+imgId+'"src="'+pic+'"><div id="play-button"><div id="triangle-right"></div></div></div><p class="info">'+info+'Proin ornare ligula eu tellus tempus elementum. Aenean bibendum iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Ut vel arcu ac tortor adipiscing hendrerit vel sed massa. Fusce sem libero, lacinia vulputate interdum non, porttitor non quam. Aliquam sed felis ligula. Duis non nulla magna.</p></div></div></div></div></div>');
};

var playSound = function(sound){
	var audio = new Audio(sound);
	 	

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
	};




//-----function that assignes frogs to the modal
var frogModal = function(frog){
var xxxid = '#'+frog
var x = eval(frog)
$(xxxid).click(function(){
	
	$('#kingModal').html(modalPop(x.name, x.sciName, x.imgId, x.pic, x.info  ));
	return(playSound(x.sound));
});

//----------Assigining a frog to the Modal
}
frogModal('Americanbullfrog');
frogModal('Americantoad');
frogModal('Carpenterfrog');
frogModal('Easternspadefoot');
frogModal('Fowlerstoad');
frogModal('Greenfrog');
frogModal('NewJerseychorusfrog');
frogModal('Northerncricketfrog');
frogModal('Northerngraytreefrog');
frogModal('Northernspringpeeper');
frogModal('Pickerelfrog');
frogModal('PineBarrenstreefrog');
frogModal('Southerngraytreefrog');
frogModal('Southernleopardfrog');
frogModal('Uplandchorusfrog');
frogModal('Woodfrog');
}); //This is THE END







