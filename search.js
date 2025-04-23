
document.getElementById('searchBar').addEventListener('input', function(e) {
  const query = e.target.value;
  if (query.length > 2) {
    console.log('Search:', query); // Replace with TMDb API call
  }
});
