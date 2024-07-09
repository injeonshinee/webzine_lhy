const video = document.getElementById('bgVideo');
const backgroundImage = document.getElementById('backgroundImage');
const content = document.getElementById('content');

document.addEventListener('DOMContentLoaded', function() {
  // 세션 스토리지에서 'firstVisit' 값을 확인
  var firstVisit = sessionStorage.getItem('firstVisit');

  if (!firstVisit) {
      // 첫 방문일 경우 실행할 코드
      console.log('첫 방문입니다. 특정 코드를 실행합니다.');

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

      // 첫 방문 여부를 세션 스토리지에 저장
      sessionStorage.setItem('firstVisit', 'true');
  } else {
      // 첫 방문 이후의 코드
      console.log('이미 방문한 적이 있습니다.');
      video.style.display = 'none';
      backgroundImage.style.opacity = '1';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';


  }
});
