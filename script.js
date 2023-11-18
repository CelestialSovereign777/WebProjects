const firstGradientColorPicker = document.getElementById('firstGradientColorPicker');
const secondGradientColorPicker = document.getElementById('secondGradientColorPicker');
const textColorPicker = document.getElementById('textColorPicker');
const toggleButton = document.getElementById('toggleButton');
const colorPickers = document.getElementById('colorPickers');
const presetColors = document.querySelectorAll('.preset-color');

toggleButton.addEventListener('click', function() {
    colorPickers.classList.toggle('hidden');
});

function changeColors(firstGradientColor, secondGradientColor, textColor) {
    const elements = document.querySelectorAll('div, body');
    elements.forEach((element) => {
        element.style.background = `linear-gradient(to right, ${firstGradientColor}, ${secondGradientColor})`;
    });
    document.body.style.color = textColor;
    // Save color preferences to local storage
    localStorage.setItem('firstGradientColor', firstGradientColor);
    localStorage.setItem('secondGradientColor', secondGradientColor);
    localStorage.setItem('textColor', textColor);
}

firstGradientColorPicker.addEventListener('input', function() {
    const firstGradientColor = firstGradientColorPicker.value;
    const secondGradientColor = secondGradientColorPicker.value;
    const textColor = textColorPicker.value;
    changeColors(firstGradientColor, secondGradientColor, textColor);
});

secondGradientColorPicker.addEventListener('input', function() {
    const firstGradientColor = firstGradientColorPicker.value;
    const secondGradientColor = secondGradientColorPicker.value;
    const textColor = textColorPicker.value;
    changeColors(firstGradientColor, secondGradientColor, textColor);
});

textColorPicker.addEventListener('input', function() {
    const firstGradientColor = firstGradientColorPicker.value;
    const secondGradientColor = secondGradientColorPicker.value;
    const textColor = textColorPicker.value;
    changeColors(firstGradientColor, secondGradientColor, textColor);
});

// Function to apply preset colors
function applyPresetColors(presetColor) {
    firstGradientColorPicker.value = presetColor;
    secondGradientColorPicker.value = '#000000'; // Set second gradient to black
    // Determine complementary text color based on preset color
    const textColor = getComplementaryTextColor(presetColor);
    textColorPicker.value = textColor;
    changeColors(presetColor, '#000000', textColor); // Set second gradient to black
}

// Function to get complementary text color
function getComplementaryTextColor(hexColor) {
    // Convert hex color to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Determine complementary text color (black or white)
    return luminance > 0.5 ? '#000000' : '#ffffff';
}

// Add click event listeners to preset color circles
presetColors.forEach(function(presetColorCircle) {
    presetColorCircle.addEventListener('click', function() {
        const selectedColor = this.getAttribute('data-color');
        applyPresetColors(selectedColor);
    });
});

// Load saved color preferences from local storage
const savedFirstGradientColor = localStorage.getItem('firstGradientColor');
const savedSecondGradientColor = localStorage.getItem('secondGradientColor');
const savedTextColor = localStorage.getItem('textColor');
if (savedFirstGradientColor && savedSecondGradientColor && savedTextColor) {
    firstGradientColorPicker.value = savedFirstGradientColor;
    secondGradientColorPicker.value = savedSecondGradientColor;
    textColorPicker.value = savedTextColor;
    changeColors(savedFirstGradientColor, savedSecondGradientColor, savedTextColor);
} else {
    // Apply default colors if no saved preferences are found
    applyPresetColors('#ff0000'); // Default to red
}
