//循环播放代码
window.addEventListener('DOMContentLoaded', function() {
    var imageModule = document.querySelector('.image-module');
    var images = imageModule.getElementsByTagName('img');
    var currentImageIndex = 0;
    var prevButton = document.getElementById('prev-button');
    var nextButton = document.getElementById('next-button');
  
    images[currentImageIndex].classList.add('active');
  
    function showNextImage() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
      images[currentImageIndex].classList.add('active');
    }
  
    function showPrevImage() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
      }
      images[currentImageIndex].classList.add('active');
    }
  
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  
    setInterval(showNextImage, 3000);
  });
  