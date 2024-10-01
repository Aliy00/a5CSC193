function showAlert() {
    alert("Hello, world!");
}

function makeTextBigger() {
    document.getElementById("message").style.fontSize = "24pt"; // Change font size of the textarea
}

function toggleStyles() {
    const textarea = document.getElementById("message");
    const fancyButton = document.getElementById("fancy");
    
    if (fancyButton.checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "red";
        textarea.style.textDecoration = "underline";
    } else {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
    }
}

function addMoo() {
    const textarea = document.getElementById("message");
    let text = textarea.value;
    
    // Convert text to uppercase
    text = text.toUpperCase();

    // Split sentences by period
    const sentences = text.split('.');
    // Add "-Moo" to the last word of each sentence
    const updatedSentences = sentences.map(sentence => {
        const words = sentence.trim().split(' ');
        if (words.length > 0) {
            words[words.length - 1] += "-Moo"; // Add "-Moo" to the last word
        }
        return words.join(' ');
    });

    // Join sentences back together
    textarea.value = updatedSentences.join('. ') + (updatedSentences.length > 1 ? '.' : '');
}
