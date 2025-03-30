window.onload = function () {
  const video = document.getElementById("slogan-home");
  video.muted = true;
  video.play(); // This ensures autoplay is triggered once the page loads
  // Optionally unmute the video after some time (e.g., after 3 seconds)
  setTimeout(function () {
    video.muted = false; // Unmute the video
  }, 1000); // 3 seconds delay
};
