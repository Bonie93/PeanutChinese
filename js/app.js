let words = window.HSK1;
let current = 0;

function showWord() {

    document.getElementById("hanzi").textContent = words[current].hanzi;

    document.getElementById("pinyin").textContent = words[current].pinyin;

    document.getElementById("meaning").textContent = words[current].meaning;

    document.getElementById("counter").textContent =
        `${current + 1}/${words.length}`;
}

showWord();

document.getElementById("nextBtn").onclick = () => {

    current++;

    if (current >= words.length) {

        current = 0;

    }

    showWord();

};

document.getElementById("prevBtn").onclick = () => {

    current--;

    if (current < 0) {

        current = words.length - 1;

    }

    showWord();

};

document.getElementById("speakBtn").onclick = () => {

    speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(words[current].hanzi);

    msg.lang = "zh-CN";

    speechSynthesis.speak(msg);

};
document.getElementById("randomBtn").onclick = () => {

    current = Math.floor(Math.random() * words.length);

    showWord();

};
