function updateCharCount() {
    const textBox = document.getElementById('textBox');
    const charCount = document.getElementById('charCount');
    const coloredTextDisplay = document.getElementById('coloredTextDisplay');
    const text = textBox.value;
    const length = text.length;
    
    // Update character count display
    charCount.textContent = `Character count: ${length}`;

    // Apply color coding
    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        if (i < 40) {
            coloredText += `<span class="green-bg">${text[i]}</span>`;
        } else if (i < 70) {
            coloredText += `<span class="yellow-bg">${text[i]}</span>`;
        } else {
            coloredText += `<span class="red-bg">${text[i]}</span>`;
        }
    }
    
    // Update the colored text display with colored text
    coloredTextDisplay.innerHTML = coloredText;
}

// Fix to prevent the innerHTML setting breaking the text box behavior
document.getElementById('textBox').addEventListener('input', function() {
    let cursorPosition = this.selectionStart;
    this.value = this.value; // Trigger the input event to re-render the HTML
    this.setSelectionRange(cursorPosition, cursorPosition);
});
