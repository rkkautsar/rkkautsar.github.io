$(function(){
	$('#top')
		.parallax({imageSrc: 'img/top-background-dark.jpg', position: 'right center', bleed: 10})
		.css('background', 'transparent');
	$('#design')
		.parallax({imageSrc: 'img/design-background-light.jpg', bleed: 10})
		.css('background', 'transparent');
	$('#code')
		.parallax({imageSrc: 'img/code-background-dark.png', bleed: 10})
		.css('background', 'transparent');
});
