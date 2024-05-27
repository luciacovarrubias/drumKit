
var drumsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<drumsButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
 );
    
}
document.addEventListener('keydown', function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound (key){
    switch (key) {
        case 'w':
            var crashSound = new Audio('sounds/crash.mp3');
            crashSound.play();
            break;
        case 'a':
            var tom1Sound = new Audio('sounds/tom-1.mp3');
            tom1Sound.play();
            break;
        case 's':
            var tom4Sound = new Audio('sounds/tom-4.mp3');
            tom4Sound.play();
            break;
        case 'd':
            var tom3Sound = new Audio('sounds/tom-3.mp3');
            tom3Sound.play();
            break;
        case 'j':
            var tom2Sound = new Audio('sounds/tom-2.mp3');
            tom2Sound.play();
            break;
        case 'k':
            var snareSound = new Audio('sounds/snare.mp3');
            snareSound.play();
            break;
        case 'l':
            var kickSound = new Audio('sounds/kick-bass.mp3');
            kickSound.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

