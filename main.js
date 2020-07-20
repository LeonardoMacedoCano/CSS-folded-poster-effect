var
	bgColor;

function setPropertyStyle(id, valor) {
	document.body.style.setProperty(`--${id}`, valor);
}

function start() {
	bgColor = '#ffa07a';
	setPropertyStyle('bgColor', bgColor);
}

start();