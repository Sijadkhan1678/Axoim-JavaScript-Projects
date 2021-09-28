const video = document.getElementById('video');
const play = document.getElementById('play');
const stopbutton = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');

function playpause() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }

};
function updateicons() {
    if (video.paused) {
        play.innerHTML = '<img src="icon/play.png">'
    }
    else {
        play.innerHTML = '<img src="icon/pause1.png">'
        
    }

};
function updateprogress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let minutes = Math.floor(video.currentTime / 60)
    if (minutes < 10) {
        minutes = '0' + String(minutes);
        
    }
    let seconds = Math.floor(video.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
   time.innerHTML = `${minutes}:${seconds}`;
};


function updatevideoprogress() {
    video.currentTime = (progress.value * video.duration) / 100;
};

function videostop() {
    video.currentTime = 0;
    video.pause();
};




video.addEventListener('click', playpause);
video.addEventListener('pause', updateicons);
video.addEventListener('play', updateicons);
video.addEventListener('timeupdate', updateprogress)
progress.addEventListener("change", updatevideoprogress)
play.addEventListener('click', playpause);
stopbutton.addEventListener('click', videostop);
