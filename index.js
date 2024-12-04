let i = 0;
const txt = "Don't worry, we dey for you";
const speed = 70;

function typeWriter() {
  const element = document.getElementById("wedey");
  if (i < txt.length) {
    element.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

// Function to update the focus and position
const updateSlider = () => {
  // Remove all active and dimmed classes
  slides.forEach((slide) => {
    slide.classList.remove("active", "dimmed");
  });

  // Add active to the current index and dimmed to others
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  slides[currentIndex].classList.add("active");
  slides[prevIndex].classList.add("dimmed");
  slides[nextIndex].classList.add("dimmed");

  // Translate the slider to center the current slide
  slider.style.transform = `translateX(-${(currentIndex - 1) * 33.33}%)`;
};

// Automatically move to the next slide
const autoSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
};

// Initialize the slider
updateSlider();
setInterval(autoSlide, 1500); // Change slide every 3 seconds
