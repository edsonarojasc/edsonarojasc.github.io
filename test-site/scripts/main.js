let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/front-image.jpg') {
      myImage.setAttribute('src','images/error.png');
    } else {
      myImage.setAttribute('src','images/front-image.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name:');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "We're doing it, " + myName;
      }
  }  

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "We're doing it, " + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }