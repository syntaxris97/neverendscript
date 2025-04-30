// JavaScript functionality can be added here if needed
document.querySelector('.searchbtn').addEventListener('click', function() {
    const query = document.querySelector('.searchbar input').value;
    alert('Searching for: ' + query);
});
