const input = document.querySelector('.inputName');
const span = document.querySelector('.result1');
const gif = document.querySelector('.gif');

// list kodam kodam 
const kodams = ['harimau','ikan paus','klajengking','kucing putih','kucing','kuda speed','manusia srigala','naga api','rajawali','srigala hitam','singa rimba','ular berkepala banyak'];

// function ketika enter di click
const form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const lenghtName = input.value.length;
    const index = Math.round(Math.random() * (kodams.length - 1));
    if (input.value === '') {
        span.innerHTML = 'kosong';
        gif.src = `https://c4.wallpaperflare.com/wallpaper/280/258/513/cat-dark-black-profile-wallpaper-preview.jpg`;
    } else {
        span.innerHTML = kodams[index];
        gif.src = `gifs/${kodams[index]}.gif`;
    }
    input.value = '';
    speakText('kodam mu adalah '+span.innerHTML); // Call the speakText function
});


function keyDown(e) {
    console.log(e);
}

// function speech syntesis membaca span inner Html
function speakText(text) {
    // mengecek apakan fiture speechsyntesisi ada atau tidak 
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID'; // Set language to Indonesian
        
        // mengunbah voice menjadi v=indonesian voice
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => voice.lang === 'id-ID' && voice.name.includes('female') || voice.name.includes('wanita'));
    
    // mengecek apakah voice cewek ada atau tidak
        if (femaleVoice) {
            utterance.voice = femaleVoice;
        } else {
            console.warn("Female voice for Indonesian not found, using default voice.");
        }

        // speech membaca text di parameter 
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Speech synthesis not supported in this browser.");
    }
}

// memastikan voices speechSyntesis di reload sebelum berbicara
window.speechSynthesis.onvoiceschanged = () => {
    speakText(""); // Load voices by calling the function with an empty string
};
