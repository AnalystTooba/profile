// Function to handle toggle functionality for a section
function setupToggle(buttonId, sectionId) {
    const toggleButton = document.getElementById(buttonId);
    const portfolioItems = document.querySelectorAll(`#${sectionId} .portfolio-hidden`);

    // Initially hide all items
    portfolioItems.forEach(item => {
        item.style.display = 'none';
    });

    toggleButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Check if portfolio items are currently collapsed (based on the first item visibility)
        const isCollapsed = portfolioItems[0].style.display === 'none';

        // Toggle visibility of portfolio items
        portfolioItems.forEach(item => {
            item.style.display = isCollapsed ? 'block' : 'none';
        });

        // Update button text and scroll behavior
        if (isCollapsed) {
            toggleButton.textContent = 'Collapse All';
        } else {
            toggleButton.textContent = 'Show All';

            // Scroll to the section header when collapsing
            const sectionElement = document.getElementById(sectionId);
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Set up toggle for each section
setupToggle('toggleGeospatial', 'geospatial');
setupToggle('toggleMPKasur', 'MPKasur');
setupToggle('toggleResearch', 'Research');
setupToggle('togglePython', 'Python');
