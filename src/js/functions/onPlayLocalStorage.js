export const KEY_LOCAL_STORAGE = 'videoplayer-current-time';

export function onPlayLocalStorage(data) {
  localStorage.setItem(KEY_LOCAL_STORAGE, data.seconds);
}
