// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('mainVideo');
    const videoList = document.getElementById('videoList');

    videoList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedVideo = event.target.getAttribute('data-video');
            mainVideo.src = selectedVideo;
            mainVideo.play();
        }
    });
});