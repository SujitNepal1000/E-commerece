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

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const sliderImages = document.querySelector('.slider-images');
const images = Array.from(sliderImages.getElementsByTagName('img'));
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

function updateSlider() {
  const slideWidth = sliderImages.clientWidth;
  const transformValue = -currentIndex * slideWidth;
  sliderImages.style.transform = `translateX(${transformValue}px)`;
}
