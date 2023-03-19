var container = document.querySelector(".container");
var thankYou = document.querySelector(".thank_you");
var submitBtn = document.getElementById("submit");
var rateAgainBtn = document.getElementById("rate_again");
var ratingPoints = document.getElementById("rating");
var rateButtons = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", function () {
  thankYou.classList.remove("hide_class");
  container.style.display = "none";
});

rateAgainBtn.addEventListener("click", function () {
  thankYou.classList.add("hide_class");
  container.style.display = "block";
  ratingPoints.innerHTML = null;
  submitBtn.disabled = true;
});

rateButtons.forEach((singleRateButton) => {
  singleRateButton.addEventListener("click", function () {
    ratingPoints.innerHTML = singleRateButton.innerHTML;
    submitBtn.removeAttribute("disabled");
  });
});
