function playSound(e) {
    // create variable for playing audio element
    const audio = document.querySelector(`audio[data-key='${e.keyCode}'`);
    // create variable for adding visual elements
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // stop the function from running
    audio.currentTime = 0; // rewind audio
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it's not a transfrom
    this.classList.remove('playing'); // remove the classlist playing after it has stopped playing
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);