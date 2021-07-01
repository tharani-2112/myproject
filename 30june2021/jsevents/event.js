var btn = document.querySelector(".date");

btn.addEventListener("mouseover", function() {
  this.textContent = "Click here to see the date and time";
})
btn.addEventListener("mouseout", function() {
  this.textContent = "click";
})