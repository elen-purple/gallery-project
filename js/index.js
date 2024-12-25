const likeBtns = document.querySelectorAll(".like-btn");
const countOutput = document.querySelector("#count");
let numberOfLikedPhoto = 0;

likeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("checked");
    if (e.currentTarget.classList.contains("checked")) {
      numberOfLikedPhoto += 1;
      e.currentTarget.textContent = "Liked";
    } else {
      numberOfLikedPhoto -= 1;
      e.currentTarget.textContent = "Like";
    }
    countOutput.textContent = `${numberOfLikedPhoto}`;
  });
});
