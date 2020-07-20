var
	bgColor,
	imgHeight,
	imgWidth,
	imgBorder,
	fileName;

$(document).ready(function(e){
	var windowHeight = window.innerHeight;
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

function setPropertyStyle(id, valor) {
	document.body.style.setProperty(`--${id}`, valor);
}

function changeImage(fileName){
	var img = new Image();
	img.src = fileName;

  	img.onload = function() {
		imgHeight = this.height;
		imgWidth = this.width;
		imgBorder = imgWidth / 6;

		setPropertyStyle('imgBg', 'url('+fileName+')');
		setPropertyStyle('bgColor', bgColor);
		setPropertyStyle('imgHeight', imgHeight);
		setPropertyStyle('imgWidth', imgWidth);
		setPropertyStyle('imgBorder', imgBorder);
    }
}

function start() {
	bgColor = '#ffa07a';
	fileName = 'img/paisagem.jpg';
	changeImage(fileName);
}

start();