const video = document.getElementById('bgVideo');
    const backgroundImage = document.getElementById('backgroundImage');
    const content = document.getElementById('content');

    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 2) {
        backgroundImage.style.opacity = '1';
      }
      if (video.currentTime >= 3) {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }
    });

    video.addEventListener('ended', () => {
      video.style.display = 'none';
    });