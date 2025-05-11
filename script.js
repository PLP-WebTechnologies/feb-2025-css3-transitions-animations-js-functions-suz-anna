// Check localStorage for theme preference
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
};

// Add event listener to the theme toggle button
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
    // Toggle dark theme on click
    document.body.classList.toggle('dark-theme');
    
    // Save theme preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});

// Add event listener to the animated button (or any other element)
document.getElementById('animateButton').addEventListener('click', () => {
    // Trigger an animation when clicked
    alert("Button clicked! Animation triggered.");
    document.getElementById('animateButton').style.animation = 'bounce 1s';

    // Reset animation
    setTimeout(() => {
        document.getElementById('animateButton').style.animation = '';
    }, 1000);
});

// Define keyframes for the "bounce" animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
`, styleSheet.cssRules.length);
