var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/archangel45-pfp.png') {
		myImage.setAttribute('src', 'images/firefox2.png');
	} else {
		myImage.setAttribute('src', 'images/archangel45-pfp.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hello there, ' + myName + '!';
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hello there, ' + storedName + '!';	
}

myButton.onclick = function() {
	setUserName();
}
