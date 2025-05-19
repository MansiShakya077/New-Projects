
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = voice.name + " (" + voice.lang + ")";
        voiceSelect.appendChild(option);
    });
    speech.voice = voices[0]; // Set default voice
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});