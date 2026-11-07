document.addEventListener("DOMContentLoaded", () => {
  filterSelection('all');
});

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery-item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-buttons");
// Optional: wrap buttons in a container with this ID or use querySelectorAll
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener("click", function(){
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});
document.querySelectorAll('.gallery-item img').forEach(image => {
  image.onclick = function() {
    const modal = document.getElementById('lightbox');
    const modalImg = document.getElementById('img01');
    modal.style.display = 'flex';
    modalImg.src = this.src;
  }
});