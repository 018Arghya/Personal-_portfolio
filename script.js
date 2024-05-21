document.getElementById('cvBtn').addEventListener('click', function() {
    // Create an anchor element
    var downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'images/soham.pdf'); // Specify the path to your file
    downloadLink.setAttribute('download', 'soham.pdf'); // Specify the filename users will see

    // Simulate a click on the anchor element to trigger the download
    downloadLink.click();
});



const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('dark-mode-toggle'); // Optional styling adjustment

    // Store theme preference in local storage (optional)
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Apply stored theme preference on page load (optional)
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.classList.add('dark-mode-toggle'); // Optional styling adjustment
}

function openWhatsAppChat(phoneNumber) {
    // Replace +1234567890 with the desired phone number
    var whatsappURL = "https://wa.me/" + 6296624049;
    window.open(whatsappURL, '_blank');
}