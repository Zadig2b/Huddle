function openForm() {
  var popup = document.getElementById("myForm");
  popup.style.display = "block";
}


function closeForm() {
  var popup = document.getElementById("myForm");
  popup.style.display = "none";
}



window.onclick = function(event) {
  var popup = document.getElementById('myForm');
  if (event.target == popup) {
    closeForm();
  }
}