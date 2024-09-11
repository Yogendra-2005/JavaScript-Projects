let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let duration = document.querySelector(".duration");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  let minutes = Math.floor(song.duration / 60);
  let seconds = Math.floor(song.duration % 60);
  duration.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

ctrlIcon.addEventListener("click", () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
});

setInterval(() => {
  if (!song.paused) {
    let currentMinutes = Math.floor(song.currentTime / 60);
    let currentSeconds = Math.floor(song.currentTime % 60);
    duration.innerHTML = `${currentMinutes
      .toString()
      .padStart(2, "0")}:${currentSeconds.toString().padStart(2, "0")}`;
  }
}, 500);

progress.onchange = function () {
  song.pause();
  song.currentTime = progress.value;
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
};
