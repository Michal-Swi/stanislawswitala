function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getRandomImage() {
	let images = [
		'./photos/alpes poloniae-1.jpg',
		'./photos/alpes poloniae-2.jpg',
		'./photos/alpes poloniae-3.jpg',
		'./photos/alpes poloniae-4.jpg',
		'./photos/alpes poloniae-5.jpg',
		'./photos/alpes poloniae-6.jpg',
	];

	const random = getRandomInt(5);
	return images[random];
}

window.addEventListener('DOMContentLoaded', () => {
	const img = document.getElementById('main-photo');
	img.src = getRandomImage();
});

