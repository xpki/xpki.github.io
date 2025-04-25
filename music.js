const audio = document.getElementById("bg-audio");
const btn = document.getElementById("mute-btn");

audio.volume = 0.38;

btn.textContent = audio.muted ? "Unmute" : "Mute";

btn.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    audio.play(); // <-- force playback
    btn.textContent = "Mute";
  } else {
    audio.muted = true;
    btn.textContent = "Unmute";
  }
});