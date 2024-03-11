const dicePng = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
]

const randomNumber1 = Math.floor(Math.random() * 6);
const randomNumber2 = Math.floor(Math.random() * 6);

const image1 = document.querySelectorAll('img.imageDice')[0]
const image2 = document.querySelectorAll('img.imageDice')[1]

image1.setAttribute('src',`./images/${dicePng[randomNumber1]}`)
image2.setAttribute('src',`./images/${dicePng[randomNumber2]}`)


var nameHeading = document.querySelector('h1')

if (randomNumber1 > randomNumber2) {
    nameHeading.innerHTML = "Player 1 win"
} else if(randomNumber1 < randomNumber2) {
    nameHeading.innerHTML = "Player 2 win"
}else if(randomNumber1 === randomNumber2){

    nameHeading.innerHTML = "Draw"
}
else{
    
    nameHeading.innerHTML = "Refresh me";
 
}
