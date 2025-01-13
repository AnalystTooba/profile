const toggleButton = document.getElementById('toggleButton');
const portfolioItems = document.querySelectorAll('.portfolio-hidden');

// Initially show the first two rows (first two items)
portfolioItems.forEach((item, index) => {
    if (index < 0) {
        item.style.display = 'block'; // Show the first two items
    } else {
        item.style.display = 'none'; // Hide the rest
    }
});

// Prevent the default action of the button to avoid scrolling to the top
toggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Check if portfolio items are currently collapsed (based on the first item visibility)
    const isCollapsed = portfolioItems[0].style.display === 'none';

    // Toggle visibility of all portfolio items
    portfolioItems.forEach(item => {
        item.style.display = isCollapsed ? 'block' : 'none';
    });

    // Change button text and style based on the current state
    if (isCollapsed) {
        toggleButton.textContent = 'Collapse All';
        toggleButton.classList.add('collapse');
    } else {
        toggleButton.textContent = 'Show All';
        toggleButton.classList.remove('collapse');

        // Scroll to the "Certificates" section after collapsing
        const certificatesSection = document.getElementById('two');
        certificatesSection.scrollIntoView({ behavior: 'smooth' });
    }
});