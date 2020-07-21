var
	windowHeight = window.innerHeight;

const IMG = {
	height: 0,
	width: 0,
	border: 0,
	marginTop: 0,
	bgColor: '#ffa07a',
	borderColor: '#ffffff',
	bgImg: 'img/landscape.jpg',
}

$(document).ready(function(e){
	$('#navigation-menu').css('height', windowHeight + 'px');

	$(document).on('click', '#showMenu', function(){
		$('#navigation-menu').css('left', '0');
		$('#showMenu, #hideMenu').css('left', '160px');
		$('#showMenu, #hideMenu').html('<i class="fa fa-chevron-left"></i>');
		$('#showMenu').attr('id', 'hideMenu');
	});

	$(document).on('click', '#hideMenu', function(){
		$('#navigation-menu').css('left', '-160px');
		$('#showMenu, #hideMenu').css('left', '0');
		$('#showMenu, #hideMenu').html('<i class="fa fa-cog"></i>');
		$('#hideMenu').attr('id', 'showMenu');
	});
});

function setPropertyStyle(id, value) {
	document.body.style.setProperty(`--${id}`, value);
}

function setElementIdValue(id, value) {
	document.getElementById(id).value = value;
}

function changeImage(fileName){
	var newImg = new Image();
	newImg.src = fileName;

  	newImg.onload = function() {
		IMG.height = this.height;
		IMG.width = this.width;
		IMG.border = IMG.width / 6;
		IMG.marginTop = (windowHeight - (IMG.height + IMG.border)) / 2;
		IMG.bgImg = 'url('+fileName+')';

		for (const key of Object.keys(IMG)) {
		 	setPropertyStyle(`${key}`, IMG[key]);

		 	if (document.getElementById(`${key}`) !== null) {
		 		setElementIdValue(`${key}`, IMG[key]);
		 	}
		}
    }
}

changeImage(IMG.bgImg);