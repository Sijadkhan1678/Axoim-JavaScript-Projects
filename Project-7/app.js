// Get DOM Elements
const container = document.getElementById('container')
const songTitle = document.getElementById('song-title');
const progress = document.getElementById('progress');
const albumArt = document.getElementById('album-art');
const previousBtn = document.getElementById('previous');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio')
let isPlay = false;


const Tracks = ['National Anthem']
let TrackIndex = 0
loadTrack(Tracks[TrackIndex]);

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