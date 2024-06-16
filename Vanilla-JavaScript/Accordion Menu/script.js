function toggleAccordion(element) {
    // Get the content element next to the clicked header
    const content = element.nextElementSibling;
    
    // Check if the content is already visible
    if (content.style.maxHeight) {
        // If content is visible, hide it
        content.style.maxHeight = null;
    } else {
        // If content is hidden, show it and hide others
        const allContents = document.querySelectorAll('.accordion-content');
        allContents.forEach((item) => {
            item.style.maxHeight = null;
        });
        
        // Set the maxHeight to its scrollHeight to make it visible
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}
