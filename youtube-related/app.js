function main() {
    console.log('Hello World');
    updateVideoStreamSize();
}

function updateVideoStreamSize() {
    let videoStream = document.querySelector('.video-stream');
    let html5VideoContainer = document.querySelector('.html5-video-container');
    // HTML5 video container height is always 0
    // Calculate the height of the video stream based on the aspect ratio of the video
    let aspectRatio = 9 / 16;
    let videoStreamHeight = html5VideoContainer.offsetWidth * aspectRatio;
    
    setTimeout(() => {
        // Set the video stream width as the width of the HTML5 video container
        videoStream.style.width = `${html5VideoContainer.offsetWidth}px`;
        videoStream.style.height = `${videoStreamHeight}px`;
        console.log(`Video stream width: ${videoStream.offsetWidth}`);
        console.log(`Video stream height: ${videoStream.offsetHeight}`);
    }, 200);

    // Retry after 1 second
    setTimeout(() => {
        videoStream.style.width = `${html5VideoContainer.offsetWidth}px`;
        videoStream.style.height = `${videoStreamHeight}px`;
        console.log(`Video stream width: ${videoStream.offsetWidth}`);
        console.log(`Video stream height: ${videoStream.offsetHeight}`);
    }, 1000);
}

// Print video stream width and height every time the page size is resized
window.addEventListener('resize', updateVideoStreamSize);

document.addEventListener('DOMContentLoaded', main);

let playButton = document.querySelector('.ytp-large-play-button');
playButton.addEventListener('click', () => {
    console.log('Play button pressed');
    updateVideoStreamSize();
});

let thumbnail = document.querySelector('.ytp-cued-thumbnail-overlay-image');
thumbnail.addEventListener('click', () => {
    console.log('Thumbnail clicked');
    updateVideoStreamSize();
});
