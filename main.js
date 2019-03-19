var myImage = document.querySelector('img');
//myHeading.textContent = 'Hello world!!!!';
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc == 'images/firefox-icon.png') {
		myImage.setAttribute ('src','images/dino.png');
	} else {
		myImage.setAttribute ('src','images/firefox-icon.png');
	}
	
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt("Please Enter your name");
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}