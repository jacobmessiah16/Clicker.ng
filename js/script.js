
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialSlide = document.querySelector('.testimonial-slide');
let slideIndex = 0;
let totalTestimonials = document.querySelectorAll('.testimonial').length;
let visibleCount = 3; // Default to 3 visible testimonials

// Adjust visible count for different screen sizes
const updateVisibleCount = () => {
  if (window.innerWidth <= 480) {
    visibleCount = 1;
  } else if (window.innerWidth <= 1024) {
    visibleCount = 2;
  } else {
    visibleCount = 3;
  }
};

// Update visible count on page load and resize
updateVisibleCount();
window.addEventListener('resize', updateVisibleCount);

// Function to move the slide
const moveSlide = () => {
  slideIndex = (slideIndex + 1) % (totalTestimonials - visibleCount + 1);
  const slideWidth = testimonialContainer.offsetWidth / visibleCount;
  testimonialSlide.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
};

// Slide every 3 seconds
setInterval(moveSlide, 3000);

// Pause the slide on hover
testimonialContainer.addEventListener('mouseenter', () => {
  testimonialSlide.style.transition = 'none'; // Remove transition while paused
});

testimonialContainer.addEventListener('mouseleave', () => {
  testimonialSlide.style.transition = 'transform 0.5s ease-in-out'; // Add transition back
});



//Hamber------------------------------------------

  function toggleMenu() {
    document.querySelector('header ul').classList.toggle('active');
  }

