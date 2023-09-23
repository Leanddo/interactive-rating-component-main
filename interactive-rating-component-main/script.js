const rating = document.getElementById("numeric")[0];
const ratingsection = document.getElementById("firstpage")[0];
const tankssection = document.getElementsByClassName("secondpage")[0];
const ratingNumber = document.getElementById("ratingnum");

function submit() {
    ratingsection.style.display = "none";
    tankssection.style.display = "block";
    let activeElement = document.getElementsByClassName("active")[0];
    ratingNumber.innerText = rating.innerText;
}
function ratingFunc(e) {
    for (let j = 0; j < ratings.length; j++) {
      const rate = ratings[j];
      rate.classList.remove("active");
    }
    e.target.classList.add("active");
  }