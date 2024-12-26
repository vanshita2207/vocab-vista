const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
// let isSpeaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value;

  if (!synth.speaking && text) {
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
  }
};

button.addEventListener("click", textToSpeech);