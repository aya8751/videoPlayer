const video = document.querySelector(".video");
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");
const progress = document.querySelector(".progress");
const timeStamp = document.querySelector(".timeStamp");

// play and pause video
function toggleVideoStatus(){
    if(video.paused){
        video.style.width ='100%'
        video.play();
    } else{
        video.pause();
    }
}
// update play icon pased on state of video
function updateIcon(){
    if(video.paused){
        playBtn.innerHTML = `<i class="fa fa-play fa-2x"></i>`
    } else{
        playBtn.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
    }
}
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

    // get minutes form currentTime
    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10 ){
        minutes = "0" + String(minutes);
    }

    // get seconds form currentTime
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10 ){
        seconds = "0" + String(seconds);
    }
    
    timeStamp.innerHTML = `${minutes}:${seconds}`
}
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}
function setVideoProgress(){
    video.currentTime = (progress.value * video.duration) / 100 ;
}

// events handler
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', updateProgress);
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);