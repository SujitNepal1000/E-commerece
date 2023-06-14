function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

document.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.slider img');
  var currentImageIndex = 0;

  function changeImage() {
    // Hide the current active image
    images[currentImageIndex].classList.remove('active');

    // Increment the index to show the next image
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }

    // Show the new active image
    images[currentImageIndex].classList.add('active');
  }

  // Initial image display
  images[currentImageIndex].classList.add('active');

  // Change image every 5 seconds
  setInterval(changeImage, 5000);
});
