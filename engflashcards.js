const flashcards = [
    { question: "What is the plural form of 'foot'?", answer: "Feet" },
    { question: "He _______(like/likes) chocolate?", answer: "likes" },
    { question: "She lives ____ London. (in/on)", answer: "In" },
    { question: "What is the past tense of sing?", answer: "Sang" },
    { question: "_____ apple is red. (a/an)", answer: "An" },
    { question: "They are _______ (run) to the park", answer: "running" },
    { question: "What is the past participle of see", answer: "Seen" },
    { question: "What is the synonym for important", answer: "Significant." },
    { question: "What is the synonym of angry", answer: "Mad or furious" },
    { question: "What is the comparitive form of easy?", answer: "Easier" },
    { question: "she _______ (not know) where he lives?", answer: "does not know" },
    { question: "convert the following into past tense: She likes pizza", answer: "She liked pizza" },
    { question: "What is the adjective form of danger?", answer: "Dangerous" },
    { question: "They _____ (go) to the museum yesterday", answer: "went" },
    { question: "What does the idiom 'cost an arm and a leg'mean?", answer: "Something very expensive" },
    { question: "Convert in passive voice: They finished the project.", answer: "The project was finished by them." },
    { question: "Convert in negative form: She has been studying all day.", answer: "She has not been studying all day." },
    { question: "What does the phrase 'a blessing in disguise' mean?", answer: "Something that seems bad at first but turns out to be good." },
    { question: "By the time you arrive, I ______ (finish) cooking.", answer: "will have finished" },
    { question: "She lives ______ the second floor.(on/at)", answer: "on" },
    { question: "Rewrite in past tense: He goes to school.", answer: "He went to school." },
    { question: "What does to break the ice mean?", answer: "To start a conversation or make people feel comfortable." },
    { question: "What is the difference between few and a few?", answer: "Few means not enough, while a few means some but not many." },
    { question: "She decided to ______ (give up/give in) her old habits.", answer: "give up" },
    { question: "What does the idiom to hit the nail on the head mean?", answer: "To be exactly right about something." },
];

let currentCardIndex = 0;

// Function to display flashcards
function displayFlashcard() {
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");
    const wellDoneMessage = document.getElementById("wellDoneMessage");
    const flashcardContainer = document.getElementById("flashcard-container");
    const nextQuestionButton = document.getElementById("nextQuestionButton");

    // Check if it's the last question
    if (currentCardIndex === flashcards.length) {
        // Hide the flashcard container and show the Well Done message
        flashcardContainer.style.display = "none";
        wellDoneMessage.style.display = "block";
        
        // Change the button to "Home" 
        nextQuestionButton.textContent = "Home"; // Change the button text to "Home"
        nextQuestionButton.onclick = function() {
            window.location.href = "index3.html"; // Redirect to the home page
        };
    } else {
        // Display the current flashcard question and answer
        questionElement.textContent = flashcards[currentCardIndex].question;
        answerElement.textContent = flashcards[currentCardIndex].answer;
    }
}

// Event listener for the "Next Question" button
document.getElementById("nextQuestionButton").addEventListener("click", () => {
    currentCardIndex++;  // Move to the next question
    displayFlashcard();   // Display the next question
});

//  setup to display the first flashcard
displayFlashcard();
