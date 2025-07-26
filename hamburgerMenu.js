const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle the menu when the hamburger is clicked
toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close the menu when any nav link is clicked
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
