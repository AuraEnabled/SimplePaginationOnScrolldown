const container = document.querySelector('.container');
const URL = 'https://picsum.photos/200/200?random=';

/*
	1. Get a batch of imgs
*/

function getRandNum(){
	return Math.floor(Math.random() * 100);
}

function loadImages(numImages = 30){
	console.log("event fired");
	let i = 0;
	while(i < numImages){
		const img = document.createElement('img')
		img.src = `${URL}${getRandNum()}`
		container.appendChild(img)
		i++
	}
}

loadImages()

/*
	2. Listen for scroll event
*/

window.addEventListener('scroll', () =>{

	let loadMore = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
	console.log(loadMore +" > 100");

	if(document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) < 100){
		loadImages();
	}
})



