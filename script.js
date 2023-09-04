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

// read more bottom
function toggleContent() {
  var moreContent = document.getElementById("moreContent");
  var btn = document.getElementById("readMoreBtn");
  
  if (moreContent.classList.contains("hide")) {
    moreContent.classList.remove("hide");
    btn.innerHTML = "Read Less";
  } else {
    moreContent.classList.add("hide");
    btn.innerHTML = "Read More";
  }
}

function zoomIn(image) {
  image.style.transform = "scale(1.2)";
}

function zoomOut(image) {
  image.style.transform = "scale(1)";
}

const signupButton = document.getElementById('signupButton');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');
const signupForm = document.getElementById('signupForm');

signupButton.addEventListener('click', openSignupForm);
closeButton.addEventListener('click', closeSignupForm);
signupForm.addEventListener('submit', submitSignupForm);

function openSignupForm() {
  overlay.style.display = 'block';
}

function closeSignupForm() {
  overlay.style.display = 'none';
}

function submitSignupForm(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

 
}

