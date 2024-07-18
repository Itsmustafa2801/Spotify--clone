console.log("welcome to spotify");
let songindex= 0;
let audioElement= new Audio ('songs/1.mp3');
// audioElement.play();

let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
  {songName: "Money Rain ", filepath:"songs/1.mp3", coverpath:"covers/1.jpeg" },
  {songName: "Enemy ", filepath:"songs/2.mp3", coverpath:"covers/2.jpg" },
  {songName: "Middle of the night ", filepath:"songs/3.mp3", coverpath:"covers/3.jpg" },
  {songName: "Cheap thrills ", filepath:"songs/4.mp3", coverpath:"covers/4.jpg" },
  {songName: "Without me ", filepath:"songs/5.mp3", coverpath:"covers/5.jpg" },
  {songName: "As it was ", filepath:"songs/6.mp3", coverpath:"covers/6.jpg" },



]
songItem.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverpath;
element.getElementsByClassName("songName")

})

// audioelement.play();

// handle play/pause click 
masterplay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0) {
    audioElement.play();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity= 1;
  }
  else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity= 0;
  }
})
// listen to Events 
audioElement.addEventListener('timeupdate', ()=>{ 
 // update seekbar
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 myprogressBar.value = progress;
})
myprogressBar.addEventListener('change', ()=>{
     audioElement.currentTime = myprogressBar.value * audioElement.duration/100 ;

})
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
 element.classList.remove('fa-circle-pause')
  element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      console.log(e.target);
      makeAllPlays();
      songindex= parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play')
      e.target.classList.add('fa-circle-pause')
   audioElement.src= `songs/${songindex+1}.mp3`;
   masterSongName.innerText= songs[songindex].songName;
   audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity= 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    })

})

  document.getElementById('next').addEventListener('click',()=>{
    if(songindex>5){
      songindex=0
    }
    else{
    songindex+=1;
    }
    audioElement.src= `songs/${songindex+1}.mp3`;
    masterSongName.innerText= songs[songindex].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

  })

  document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
      songindex=0
    }
    else{
    songindex  -=1;
    }
    audioElement.src= `songs/${songindex+1}.mp3`;
    masterSongName.innerText= songs[songindex].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

  })

  
