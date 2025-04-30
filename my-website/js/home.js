document.querySelector('.search button').addEventListener('click', function() {
    const query = document.querySelector('.search input').value;
    // Add your search logic here
    alert('Searching for: ' + query);
});
