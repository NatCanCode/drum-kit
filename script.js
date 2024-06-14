// 'use strict';
 
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key)
    // console.log("Sound does not exists")
    if (!audio) return;
    // console.log("Sound exists")
    audio.currentTime = 0; // rewind to the start of audio
    audio.play();
    key.classList.add(`playing${e.keyCode}`)
    this.setTimeout(function() {
        key.classList.remove(`playing${e.keyCode}`)
    }, 200);
});

var keys = [81, 83, 68, 70, 71, 72, 74, 75, 76];

// Function to handle both keydown and touchstart events
function playSound(keyID) {
    var sound = document.getElementById(keyID.toString());
    if (sound) {
        sound.currentTime = 0; // Rewind to the start (important for rapid re-triggers)
        sound.play();
    }
}

// Keydown event listener
document.addEventListener('keydown', function(e) {
    var keyID = e.keyCode || e.which;
    if (keys.includes(keyID)) {
        playSound(keyID);
    }
});

// Touchstart event listener
keys.forEach(function(keyID) {
    var keyElement = document.querySelector('[data-key="' + keyID + '"]');
    if (keyElement) {
        keyElement.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent the default touch event behavior
            playSound(keyID);
        });

        keyElement.addEventListener('click', function(e) {
            playSound(keyID);
        });
    }
});
