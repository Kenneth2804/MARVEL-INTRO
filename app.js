var backgroundImages = document.querySelector('.background-images');

backgroundImages.innerHTML =
`
<img src= "marvel.jpg" alt="marvel"/>
<img src= "marvel2.jpg" alt="marvel"/>
<img src= "marvel4.jpg" alt="marvel"/>
<img src= "marvel5.jpg" alt="marvel"/>

`
var backgroundImagesItems = backgroundImages.querySelectorAll('img');
var imageCount = backgroundImagesItems.length;
var currentIndex = 0;

function changeBackgroundImage() {
	backgroundImagesItems[currentIndex].style.opacity = 0;
	currentIndex = (currentIndex + 1) % imageCount;
	backgroundImagesItems[currentIndex].style.opacity = 1;

}
setInterval(changeBackgroundImage, 50);
var intervalDuration = 5;

var body = document.querySelector('.logo');

function backGroundColor() {
	body.style.background = 'radial-gradient(#730801, #1f0100)'
}
setTimeout(backGroundColor, intervalDuration * 1000)