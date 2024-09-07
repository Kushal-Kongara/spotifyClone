console.log("Welcome to Spotify: ");

//Initialize the variables

let SongIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "a", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "b", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "c", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "d", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "e", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "f", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "g", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "h", filePath: "songs/8.mp3", coverPath: "covers/7.jpg"},
    {songName: "i", filePath: "songs/9.mp3", coverPath: "covers/7.jpg"},
    {songName: "j", filePath: "songs/10.mp3", coverPath: "covers/7.jpg"},
]

songs.forEach((element, i)=>{
    console.log(element.i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})

// audioElement.play();

//Handle play/pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=2;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
});

//listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});