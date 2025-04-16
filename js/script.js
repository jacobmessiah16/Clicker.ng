
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



  const writingPad = document.querySelector('.writing-pad');
const folder2 = document.querySelector('.folder2');

const checkVisibility = () => {
    const elements = [writingPad, folder2];
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const inView = elementPosition.top <= window.innerHeight && elementPosition.bottom >= 0;

        if (inView) {
            element.classList.add('slide-in');
        } else {
            element.classList.remove('slide-in');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Run on load to ensure elements are properly shown/hidden
checkVisibility();



    // Wrap everything to avoid polluting global scope
    (function () {
        // Use `let` instead of `const` to avoid redeclaration issues
        let writingPad = document.querySelector('.writing-pad');
        let folder2 = document.querySelector('.folder2');
        let iconed1 = document.querySelector('.folder1 .iconed1');
        let iconed2 = document.querySelector('.folder1 .iconed2');
        let iconed3 = document.querySelector('.folder1 .iconed3');

        function checkVisibility() {
            let elements = [writingPad, folder2, iconed1, iconed2, iconed3];
            elements.forEach(element => {
                if (!element) return; // avoid null errors
                let rect = element.getBoundingClientRect();
                let inView = rect.top <= window.innerHeight && rect.bottom >= 0;

                if (inView) {
                    element.classList.add('slide-in');
                } else {
                    element.classList.remove('slide-in');
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        window.addEventListener('DOMContentLoaded', checkVisibility);
    })();




    
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        if (el.classList.contains('right-slide')) {
          el.classList.add('slide-in-right');
          el.classList.remove('slide-out-right');
        }
      } else {
        if (el.classList.contains('right-slide')) {
          el.classList.remove('slide-in-right');
          el.classList.add('slide-out-right');
        }
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.right-slide').forEach(el => observer.observe(el));


  // Check if the variable is already declared to avoid redeclaration
if (typeof observer === 'undefined') {
  const folder1 = document.querySelector('.folder1');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
          } else {
              entry.target.classList.remove('in-view');
          }
      });
  }, { threshold: 0.5 }); // 50% of the element must be in view

  observer.observe(folder1);
}

