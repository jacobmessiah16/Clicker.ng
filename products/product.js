// Function to open the modal
function openModal(itemId) {
    const modal = document.getElementById(itemId);
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(itemId) {
    const modal = document.getElementById(itemId);
    modal.style.display = "none";
}

// Add event listeners for each "View Details" button
document.querySelectorAll('.viewbtn').forEach((btn, index) => {
    btn.addEventListener('click', () => openModal(`modal-${index + 1}`));
});

// Add event listeners for the close button in each modal
document.querySelectorAll('.close').forEach((btn, index) => {
    btn.addEventListener('click', () => closeModal(`modal-${index + 1}`));
});

// Add event listeners for the "Purchase Now" buttons
document.querySelectorAll('.purchasebtn').forEach((btn) => {
    btn.addEventListener('click', () => {
        alert("Thank you for your purchase!");
        closeModal();
    });
});

// Close modal if clicked outside the modal content
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});



//Hamber------------------------------------------

function toggleMenu() {
    document.querySelector('header ul').classList.toggle('active');
  }
