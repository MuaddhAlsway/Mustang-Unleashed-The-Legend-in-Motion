const video = document.getElementById('bgVideo');
const btn = document.getElementById('playBtn');

btn.addEventListener('click', () => {
    if (video.paused) {
        video.muted = false; // Unmute when starting
        video.play();
        btn.innerHTML = '<i style="color:white" class="ri-pause-circle-fill"></i>';
    } else {
        video.pause();
        btn.innerHTML = '<i style="color:white" class="ri-play-fill"></i>';
    }
});
document.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    // reset: true, // Enable if you want animations to repeat when scrolling back
  });

  // Example: animate navbar
  sr.reveal(".containerNavbar", { delay: 600, scale: 0.9 });

  // Example: animate slide sections
  sr.reveal(".Slide1", { delay: 600, scale: 0.9 });
  sr.reveal(".Slide2", { delay: 800, scale: 0.9 });
  sr.reveal(".Slide3", { delay: 1000, scale: 0.9 });

  // Paragraphs
  sr.reveal(".Muscleup-Paragraph1", { delay: 1200 });
  sr.reveal(".Muscleup-Paragraph2", { delay: 1400, origin: "left" });
});