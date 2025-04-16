// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});



const buyButton = document.querySelector('.track-info button');

buyButton.addEventListener('click', function() {
    setTimeout(function() {
        alert("Your package is in transit! Please wait while we process your order.");
    }, 2000);
});






    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }

