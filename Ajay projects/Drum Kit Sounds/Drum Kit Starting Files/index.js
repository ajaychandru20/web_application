var lenOfAllDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < lenOfAllDrum; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML; // Prevent the default behavior of the keydown event
        activateButton(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    });


}

document.addEventListener('keydown',function(event){
        var pressKey = event.key;
        addAnimation(pressKey);
        activateButton(pressKey);
        
});

function activateButton(key) {
    switch (key) {
        case "w":
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            const kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;
        default:
            console.log(documentContains);
    }
}



function addAnimation(className){
  var selectedClass = document.querySelector("." + className );
  selectedClass.classList.add("pressed")

  setTimeout(function(){
    selectedClass.classList.remove("pressed")
  }, 100);
}
