function showDetails() {
    document.querySelector('.events').style.display = 'none';
    document.getElementById('webDevDetails').style.display = 'block';
  }
  
  function goBack() {
    document.querySelector('.events').style.display = 'flex';
    document.getElementById('webDevDetails').style.display = 'none';
  }
  