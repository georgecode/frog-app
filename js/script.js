$(document).ready(function(){

//---below is a listener that will hide my model
//---its good pratice to always put the listener on page load
/*window.onpopstate = function(event) {
		$('#myModal').modal('hide');
	};*/



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
	"The American bullfrog is the largest frog in America, they can be up to 8 inches long.  The top side is green or brown, and may be spotted while the bottom side is white or yellow. The American bullfrog has ridges that run from the eye, around the tympanum (eardrum). The tympanum in males is larger than the eye and adult females are slightly larger than males. Bullfrogs will eat almost anything they can fit in their mouths, including birds and other frogs!");

var Americantoad = new frog (
	"American toad", 
	"Bufo americanus", 
	"Americantoad",
	"images/Americantoad1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/american_toad.wav",
	"The American toad is approximately 2-4 inches. American toads have short stubby bodies and legs, with a wide, rounded face. Color patterns vary, and the dominate colors can include brown, grey, tan, red, and olive. The underside is usually white with dark spots. Behind American toad’s eyes are two large parotoid glands. This species is typically very warty.");

var Carpenterfrog = new frog (
	"Carpenter frog", 
	"Rana virgatipes", 
	"Carpenterfrog",
	"images/Carpenterfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/carpenter_frog.wav",
	"The Carpenter frog is about 1.5-2.5 inches. They are brown in color, with darker brown markings. Carpenter frogs have two yellow or golden-brown dorsolateral stripes (back stripes), and two lateral stripes running from the jaw to the hind legs. Their underside is usually white or yellow with brown spots that are heaviest near the hind legs.");

var Easternspadefoot = new frog (
	"Eastern spadefoot toad", 
	"Scaphiopus h. holbrookii", 
	"Easternspadefoot",
	"images/EasternSpadefoot1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/spadefoot_toad.wav",
	"The Eastern spadefoot toad is 1.5-3 inches long with a large yellow eye, and vertical pupil. Eastern spadefoot toads spend most of their lives underground. Their skin is smoother and moister than most toads. Two irregular stripes run down their back, and on the bottom of their back feet is a small, black, spade-like projection. ");

var Fowlerstoad = new frog (
	"Fowler’s toad", 
	"Bufo woodhousii fowleri", 
	"Fowlerstoad",
	"images/Fowlerstoad1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/fowlers_toad.wav",
	"The Fowler’s toad is 2-3.75 inches and typically smaller than the American toad. The Fowler’s toad has dry warty skin, and Short legs. It’s usually gray or brown with dark blotches, and a light colored stripe that runs down its back. It’s Dorsal (back) blotches contain 2 or more warts, and it’s Ventral (belly) side is light colored with no spots, but frequently has a dark pronounced patch called the parotid gland behind each eye.");

var Greenfrog = new frog (
	"Northern green frog", 
	"Lithobates clamitans melanota", 
	"Greenfrog",
	"images/Greenfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/green_frog.wav",
	"The Northern green frog, Lithobates clamitans melanota, is a subspecies of the Green frog, Lithobates clamitans. The Northern Green Frog is between 2 and 3.9 inches long. They are best distinguished from Bullfrogs by the presence of dorsal-lateral ridges (back ridges) that extend from the rear of the tympanic membrane (ear spot) to the tail bone. Their colors are highly variable; usually the back is mostly green or brownish, with some dark spots, while the belly is mostly pale. Adult males have a yellow throat, and the tympanum (ear spot) is larger than the eye.");

var NewJerseychorusfrog = new frog (
	"New Jersey chorus frog", 
	"Pseudacris triseriata kalmi", 
	"NewJerseychorusfrog",
	"images/Newjerseychorusfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/nj_chorus_frog.wav",
	"The New Jersey chorus frog is a small brown (or grey) tree frog. Their bodies range from .75 to 1.5 inches, and are more robust than other Chorus frogs. They have three bold, dark stripes on the dorsal (back) surface from the head to the rear. They also have side stripes that extend roughly from the snout to the back legs, these stripes can be solid or broken.  They also have light lines present on the upper lip, below the eye, and a light colored belly.");

var Northerncricketfrog = new frog (
	"Northern cricket frog", 
	"Acris c. crepitans", 
	"Northerncricketfrog",
	"images/Northerncricketfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/no_cricket_frog.wav",
	"The average adult size Northern cricket frog is 1 inch. Their skin is typically very bumpy, and they have a triangular blotch on their head. Pattern and color combinations vary greatly, usually the base color is light, or dark brown with darker brown spots throughout.  A stripe on the center of the head and back can be green, red, orange, or sometimes yellow, and typically run spread out over the shoulders and sides. The belly is lightly colored and may contain a brown haze.");

var Northerngraytreefrog = new frog (
	"Northern gray treefrog", 
	"Hyla versicolor", 
	"Northerngraytreefrog",
	"images/Northerngreytreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/no_gray_frog.wav",
	"The northern gray tree frog is physically identical to the Southern gray tree frog, and they are not sexually dimorphic (male and female look the same). The Northern gray tree frog can be distinguished by its higher pitched call. They are 1.25-2+ inches. The skin is more warty than most frogs, and their toe-pads are noticeably large. Their skin color is most commonly grey or light brown, but sometimes green, especially during the breeding season. Blotches on dorsal (back) skin are slightly-to-significantly darker than the base color, and resemble splatters of paint.  Their ventral (belly) side is white, and they can exhibit orangey-yellow on their hind legs. ");

var Northernspringpeeper = new frog (
	"Northern spring peeper", 
	"Pseudacris c. crucifer", 
	"Northernspringpeeper",
	"images/Northernspringpeeper1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/spring_peeper.wav",
	"The Northern spring peeper is a tree frog approximately .75 to 1.25 inches long. This species can vary from shades of grey and brown, and light to dark depending on its surroundings. There is usually a prominent X on the back, but these markings can be indistinct.  Often they have a dark band between their eyes, and a light colored belly with small dark markings. Males are typically smaller than females, darker in color, and have dark throats.");

var Pickerelfrog = new frog (
	"Pickerel frog", 
	"Rana palustris", 
	"Pickerelfrog",
	"images/Pickerelfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/pickerel_frog.wav",
	"The Pickerel frog is 1.5-3 inches long. The base color on the dorsal (top) side can be tan, brown, or green.  Typically two rows of dark spots run down the center of the back. The sides of the Pickerel frog also have in-line or grouped dark spots. Their dorsolateral (back) ridges that run straight back from the eye to the tailbone are often lighter in color. The ventral (bottom) surface is mostly white. The Pickerel frog can be distinguished from the Southern leopard frog by its more square-ish spots, and its orange or yellow color that may appear on the hind legs.");

var PineBarrenstreefrog = new frog (
	"Pine Barrens treefrog", 
	"Hyla andersonii", 
	"PineBarrenstreefrog",
	"images/PineBarrenstreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/pine_barrens_treefrog.wav",
	"The Pine Barrens tree frog is 1.5 -2 inches in length. They are a bright lime green color with bold brown stripes that run from the nostrils, through the eyes, around to the front shoulders, and back to the hind leg. The brown strip is edged with white on the top, and fades to white on the ventral (bottom) side. Their throat is dark, and they can have yellow spots on the hind legs and front shoulder. The Pine Barrens tree frog’s feet are a combination of yellow, dark, and white.");

var Southerngraytreefrog = new frog (
	"Southern gray treefrog", 
	"Hyla chrysoscelis", 
	"Southerngraytreefrog",
	"images/Southerngreytreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/so_gray_treefrog.wav",
	"The Southern gray tree frog, also called Cope’s tree frog, is physically identical to Northern gray tree frog. The call of the Southern grey tree frog is not as high pitched as that of the Northern gray tree frog. They are 1.25-2+ inches. Their skin is more warty than most frogs, and their toe-pads are noticeably large. The Southern gray tree frog’s skin color is most commonly grey or light brown, but sometimes green, especially during the breeding season. Blotches on the dorsal (back) skin are slightly-to-significantly darker than the base color, and resemble splatters of paint.  Their ventral side (under-side) is white, and they can exhibit orangey-yellow on their hind legs.");

var Southernleopardfrog = new frog (
	"Southern leopard frog", 
	"Rana utricularia", 
	"Southernleopardfrog",
	"images/Southernleopardfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/so_leopard_frog.wav",
	"The Southern leopard frog is 2-3.5 inches, and they have a distinctive white mark in the center of their tympanum (eye spot). They have a brown or green base color, with white or light brown Dorsolateral folds (back folds). The Southern leopard frog also has variable dark spots on its back, with only a few spots present on its side. Its underside is white and may have dark markings. The snout is distinctly pointed, with a white upper lip, and a dark, black spotted lower lip.");

var Uplandchorusfrog = new frog (
	"Upland chorus frog", 
	"Pseudacris triseriata feriarum", 
	"Uplandchorusfrog",
	"images/Uplandchorusfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/upland_chorus_frog.wav",
	"The Upland chorus frog is a small tree frog that is .75 to 1.5 inches long. They are typically light or dark brown, with a white line running along the upper lip. They have dark markings running down the back that may appear as stripes or mottled (broken) stripes. Their sides have a stripe that runs from the snout, through the eye, and to the hind leg, with a light colored or brown under belly.");

var Woodfrog = new frog (
	"Wood frog", 
	"Rana sylvatica", 
	"Woodfrog",
	"images/Woodfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/wood_frog.wav",
	"The Wood frog is 2-2.8 inches long, and females are often larger than the males. They are more terrestrial than most frogs, and have a notable tendency to freeze when approached. They can be brown, tan, or rust colored, with a white or yellowish underside.   The most distinctive features of the Wood frog are their dark eye mask, and a white upper lip line. Typically they have few warts, and few dark spots on their dorsal surface (back surface).");

//frog objects end


//--------------click works
/*$('#Americanbullfrog').click(function(){
	$('#suckit').html("hello hello hello")
})*/
//--------------click workes end

//-----------click working for modal
/*
$('#Americanbullfrog').click(function(){
	
	var modalTemp_=$('#modalTemp_').html()
	var compileit=_.template(modalTemp_);
	var output = compileit({zzname:"name",zzsciName:"sciName",zzimgId:"Americanbullfrog",zzpic:"images/Americanbullfrog1.jpg",zzinfo:"info"})


	$('#kingModal').html(output)
})*/
//--------------click working for modal end

//--------------click working for modal with frog object and sound
/*
$('#Americanbullfrog').click(function(){
	var x=Americanbullfrog

	var modalTemp_=$('#modalTemp_').html()
	var compileit=_.template(modalTemp_);
	var output = compileit({zzname: x.name,zzsciName: x.sciName,zzimgId: x.imgId,zzpic:x.pic,zzinfo:x.info})


	$('#kingModal').html(output)

var playSound = function(sound){
	var audio = new Audio(sound);
	 	

		$('.playButton').click(function() {
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


playSound(x.sound)



})	
*/
//--------------click working for modal with frog object and sound end

//--------------modal working as function

var createModal = function(frog){
	var x= frog
	var frogId = '#'+ x.imgId

	$(frogId).click(function(){
			
		var modalTemp_=$('#modalTemp_').html()
		var compileit=_.template(modalTemp_);
		var output = compileit({zzname: x.name,zzsciName: x.sciName,zzimgId: x.imgId,zzpic:x.pic,zzinfo:x.info})


		$('#kingModal').html(output)

		var playSound = function(sound){
			
			var audio = new Audio(sound);

			//this var plays pauses and loops the audio clips
			var player = function(){
					if (audio.paused == false) {
			      		audio.pause();			      			
			  		} else {
			      		audio.play();

			      		//this loops the audio
			      		audio.addEventListener('ended', function() {
		    				this.currentTime = 0;
		    				this.play();
						}, false);
						audio.play();
			      		//end audio loop
			  		}

			}
			//END this var plays pauses and loops the audio clips 	

				$('.playButton').click(function() {
					player();
			  		/*if (audio.paused == false) {
			      		audio.pause();			      			
			  		} else {
			      		audio.play();



			      		//--------
			      		audio.addEventListener('ended', function() {
		    				this.currentTime = 0;
		    				this.play();
						}, false);
						audio.play();
			      		//-----------
			  		}*/
				});

				$('.frogpic').click(function() {
					player();

			  		/*if (audio.paused == false) {
			      		audio.pause();
			      			
			  		} else {
			      		audio.play();
			      		
			  		}*/
				});


				//this var ends the audio
				var playerClose =function(){
					audio.pause();
					audio.currentTime = 0;

				}
				//END this var ends the audio
				$('#closeStyle').click(function(){
					playerClose();
					/*audio.pause();
					audio.currentTime = 0;*/
				});


		//---below is a listener that will hide my model
		//---its good pratice to always put the listener on page load
		//---but in this case it needed access to the audio var
				window.onpopstate = function(event) {
					$('#myModal').modal('hide');
						playerClose();
						/*audio.pause();
						audio.currentTime = 0;*/
				};
		//---this creates a new state...it makes the browser 
		//--think this is a new page in its history stack
			history.pushState();
			};



		playSound(x.sound)

	})	
}
createModal(Americanbullfrog);
createModal(Americantoad);
createModal(Carpenterfrog);
createModal(Easternspadefoot);
createModal(Fowlerstoad);
createModal(Greenfrog);
createModal(NewJerseychorusfrog);
createModal(Northerncricketfrog);
createModal(Northerngraytreefrog);
createModal(Northernspringpeeper);
createModal(Pickerelfrog);
createModal(PineBarrenstreefrog);
createModal(Southerngraytreefrog);
createModal(Southernleopardfrog);
createModal(Uplandchorusfrog);
createModal(Woodfrog);



});//end----------









//---------------modal working as function
/*
var modalPop = function(name, sciName, imgId, pic, info){
var modalTemp_=$('#modalTemp_').html()
var compileit=_.template(modalTemp_);
var output = compileit({zzname:name,zzsciName:sciName,zzimgId:imgId,zzpic:pic,zzinfo:info})


$('#Americanbullfrog').click(function(){

	$('#kingModal').append(modalPop("American bullfrog", "Rana catesbeiana", "Americanbullfrog","images/Americanbullfrog1.jpg",  "http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav","info")
		)
	});
};*/


/*var playSound = function(sound){
	var audio = new Audio(sound);
	 	

		$('.playButton').click(function() {
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
//---------------------------------
var frogModal = function(frog){
var xxxid = '#'+frog
var x = eval(frog)
$(xxxid).click(function(){
	
	$('#kingModal').html(modalPop(x.name, x.sciName, x.imgId, x.pic, x.info  ));
	return(playSound(x.sound));
});
//--------------




};

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
frogModal('Woodfrog');*/


//---remove this after test

/*var Americantoad = new frog (
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
	return('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" id="closeStyle" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button><h4 class="modal-title" id="myModalLabel">'+name+'</h4></div><div class="modal-body"><div id="workPlease"><p class="popSci-Name">('+sciName+')</p><div class="frogpic"><img id="'+imgId+'"src="'+pic+'"></div><a class="playButton">PLAY</a><p class="info">'+info+'Hello Proin ornare ligula eu tellus tempus elementum. Aenean bibendum iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Ut vel arcu ac tortor adipiscing hendrerit vel sed massa. Fusce sem libero, lacinia vulputate interdum non, porttitor non quam. Aliquam sed felis ligula. Duis non nulla magna.</p></div></div></div></div></div>');
};

var playSound = function(sound){
	var audio = new Audio(sound);
	 	

		$('.playButton').click(function() {
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
}); //This is THE END*/







