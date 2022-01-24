// Play audio function

function playAudio(key) {
    switch (key) {
        case 'w':
            var crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;

        case 'a':
            var kickbass = new Audio('sounds/kick-bass.mp3')
            kickbass.play()
            break;

        case 's':
            var snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;

        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;

        case 'j':
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;

        case 'k':
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;

        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;

        default:
            break;
    }
}

// Animation

function makeAnimation(key) {
    var activeButton = document.querySelector('.' + key)
    activeButton.classList.add('pressed')

    setTimeout(function() {activeButton.classList.remove('pressed')}, 100)
}


// Selecting all the buttons as drum class, and storing their value as a variable, and playing the correspondend sound
document.querySelectorAll('.drum').forEach(item => {item.addEventListener('click', function() {

    playAudio(this.innerHTML)
    makeAnimation(this.innerHTML)

})})

// Do the same but with keys

document.addEventListener('keydown', function(event) {
    playAudio(event.key)
    makeAnimation(event.key)
})