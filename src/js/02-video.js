import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

function getCurrentTime(currentTime) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime.seconds));
}

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0);

localStorage.removeItem(STORAGE_KEY);
