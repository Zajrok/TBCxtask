"use strict"


// || stiky header

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('myHeader');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  });
});








// || collapsible
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
