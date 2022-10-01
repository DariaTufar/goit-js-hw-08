
import throttle from "lodash.throttle"; 

 
    const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe);

player.on(`timeupdate`, throttle(onPlay, 1500));

function onPlay({ sec }) {
    localStorage.setItem("videoplayer-current-time", sec);
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
     