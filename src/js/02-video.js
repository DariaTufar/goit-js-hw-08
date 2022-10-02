import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
import { onPlayLocalStorage } from './functions/onPlayLocalStorage';
import { KEY_LOCAL_STORAGE } from './functions/onPlayLocalStorage';

const iframeEl = document.querySelector('iframe');

const player = new Player(iframeEl);

const currentTime = localStorage.getItem(KEY_LOCAL_STORAGE);

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on(`timeupdate`, throttle(onPlayLocalStorage, 1000));
