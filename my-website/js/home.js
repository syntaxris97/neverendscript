document.addEventListener('DOMContentLoaded', function() {
    // Handle search functionality
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-btn');
    
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            console.log(`Searching for: ${query}`);
            // In a real implementation, this would trigger an API call or page navigation
            // For demo purposes, we'll just show an alert
            alert(`Searching for: ${query}`);
        }
    }
    
    // Handle pagination clicks
    const paginationLinks = document.querySelectorAll('.pagination a');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all pagination links
            paginationLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // In a real implementation, this would load the corresponding page
            console.log(`Navigating to page: ${this.textContent}`);
        });
    });
    
    // Handle image loading errors by setting placeholder images
    const images = document.querySelectorAll('.thumbnail img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace broken images with a placeholder
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22150%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20fill%3D%22%23333%22%20width%3D%22300%22%20height%3D%22150%22%2F%3E%3Ctext%20fill%3D%22%23FF9900%22%20font-family%3D%22Arial%22%20font-size%3D%2224%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EScript%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
        });
    });
});
