// Click save button, the button change color and pop a message on screen

document.addEventListener('DOMContentLoaded', function() {
  var saveButton = document.getElementById('save');
  var icon = document.getElementById('icon');
  var message = document.getElementById('message');
  // set action: change colout, pop message
  saveButton.addEventListener('click', function() {
    icon.style.color = 'rgb(216, 14, 81)';
    message.textContent = 'The recipe has been saved';

  });
});


const menuBtn = document.querySelector(".menu-icon span");
      const searchBtn = document.querySelector(".search-icon");
      const cancelBtn = document.querySelector(".cancel-icon");
      const items = document.querySelector(".nav-items");
      const form = document.querySelector("form");
      menuBtn.onclick = ()=>{
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      }
      cancelBtn.onclick = ()=>{
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active");
        cancelBtn.style.color = "#ff3d00";
      }
      searchBtn.onclick = ()=>{
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      }







