var randomNumber1 = Math.floor(Math.random() * 6);
var imageSources = ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];
var imageElement = document.querySelector(".img1");
imageElement.src = imageSources[randomNumber1];
var randomNumber2 = Math.floor(Math.random() * 6);
var imageElement = document.querySelector(".img2");
imageElement.src = imageSources[randomNumber2];
var changeText = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    changeText.innerHTML = "🚩 Player 1 Wins!"
} else if(randomNumber2 > randomNumber1) {
    changeText.innerHTML = "Player 2 Wins! 🚩"
} else {
    changeText.innerHTML = "🚩 Draw! 🚩"
}