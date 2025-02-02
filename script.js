const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');

let isPlaying = false;

function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
