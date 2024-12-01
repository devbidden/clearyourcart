let i = 0;
const txt = "Don't worry, we dey for you"; 
const speed = 70; // Adjust typing speed in milliseconds

function typeWriter() {
  const element = document.getElementById("wedey"); // Use the correct method and ID
  if (i < txt.length) {
    element.innerHTML += txt.charAt(i); // Append one character at a time
    i++;
    setTimeout(typeWriter, speed); // Call the function recursively
  }
}

// Start the typing animation when the page loads
window.onload = typeWriter;
