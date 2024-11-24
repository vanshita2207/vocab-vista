const countries = {
    "ar": "Arabic",
    "bn": "Bengali",
    "bo": "Tibetan",
    "bs": "Bosnian",
    "da": "Danish",
    "de": "German",
    "el": "Greek",
    "en": "English",
    "es": "Spanish",
    "et": "Estonian",
    "fr": "French",
    "gu": "Gujarati",
    "hi": "Hindi",
    "id": "Indonesian",
    "it": "Italian",
    "ja": "Japanese",
    "kn": "Kannada",
    "ko": "Korean",
    "la": "Latin",
    "my": "Burmese",
    "ne": "Nepali",
    "nl": "Dutch",
    "ur": "Pakistani",
    "pa": "Panjabi",
    "pl": "Polish",
    "pt": "Portuguese",
    "ro": "Romanian",
    "ru": "Russian",
    "sv": "Swedish",
    "ta": "Tamil",
    "te": "Telugu",
    "th": "Thai",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "vi": "Vietnamese",
}
   



document.getElementById("translateBtn").addEventListener("click", async () => {
    const text = document.getElementById("textToTranslate").value.trim();
    const fromLang = document.getElementById("fromLanguage").value;
    const toLang = document.getElementById("toLanguage").value;
    const translatedTextElem = document.getElementById("translatedText");

    if (!text) {
        alert("Please enter text to translate!");
        return;
    }

    translatedTextElem.textContent = "Translating..."; // Show loading message

    try {const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: "",
            source: "auto",
            target: "en",
            format: "text",
            alternatives: 3,
            api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
    });
    
    console.log(await res.json());

        if (!response.ok) {
            throw new Error("Translation failed!");
        }

        const data = await response.json();
        translatedTextElem.textContent = data.translatedText; // Show translated text
    } catch (error) {
        console.error(error);
        translatedTextElem.textContent = "An error occurred. Please try again."; // Error message in UI
        alert("An error occurred while translating. Please try again.");
    }
});
