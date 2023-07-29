// Get DOM Elements
const container = document.getElementById('container')
const songTitle = document.getElementById('song-title');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar')
const albumArt = document.getElementById('album-art');
const previousBtn = document.getElementById('previous');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio')
let isPlay = false;


const Tracks = ['National Anthem']
let TrackIndex = 0
loadTrack();

function loadTrack() {

    songTitle.innerText = Tracks[TrackIndex]
    albumArt.src = `images/${Tracks[TrackIndex]}.jpeg`
    audio.src = `./music/${Tracks[TrackIndex]}.mp3`;

}

function playTrack() {

    container.classList.add('play');
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    audio.play();

}

function pauseTrack() {

    container.classList.remove('play');
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    audio.pause()

}

function previousTrack() {

    if (TrackIndex < 0) {

        TrackIndex = Tracks.length - 1
    }

    TrackIndex - 1
    loadTrack()
    playTrack()

}

function nextTrack() {

    if (TrackIndex === Tracks.length - 1) {
        TrackIndex = 0
    }

    TrackIndex + 1
    loadTrack()
    playTrack()

}

function updateProgress(e) {
    
const { duration,currentTime } = audio;
let percentage = currentTime / duration * 100;
progressBar.style.width = `${percentage}%`;

}

function setProgress(e) {
    
const { clientWidth } = progress;
const clickLocation = e.offsetX;
const duration = audio.duration
console.log('clicklocation,client',clickLocation , clientWidth ,duration)
 console.log('current Time',clickLocation / clientWidth * duration)

// const percentage = clickLocation /  * duration
// progressBar.style.width = `${percentage}%`
audio.currentTime = clickLocation / clientWidth * duration;
// console.log(percentage)
//const width = this.clientWidth;
// Get the x axis px value for the location of click on the progress bar container
//const clickLocation = e.offsetX;
// Get the total duration of the track
//const duration = audio.duration;
// Reassign the currentTime of audio track by calculating based on above metrics
//audio.currentTime = clickLocation / width * duration;


}

playBtn.addEventListener('click', function () {

    if (!isPlay) {
        isPlay = true
        playTrack();
    }
    else {
        isPlay = false
        pauseTrack()

    }

})

previousBtn.addEventListener('click', previousTrack);
nextBtn.addEventListener('click', nextTrack);
audio.addEventListener('timeupdate',updateProgress);
progress.addEventListener('click',setProgress);
audio.addEventListener('ended', nextTrack);