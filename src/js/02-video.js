import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  const currentTime = data.seconds.toString();
  localStorage.setItem('videoplayer-current-time', currentTime);
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(onPlay, 1000));
