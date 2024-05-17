const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.flex"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


// Resize card images based on available space
function resizeCardImages() {
  const cardContainer = document.querySelector('.card__container');
  const cardArticles = document.querySelectorAll('.card__article');

  const containerWidth = cardContainer.offsetWidth;
  const cardMargin = 20; // Adjust margin as needed

  cardArticles.forEach(cardArticle => {
    const cardImg = cardArticle.querySelector('.card__img');
    const cardData = cardArticle.querySelector('.card__data');

    const cardDataWidth = cardData.offsetWidth;
    const availableWidth = containerWidth - cardDataWidth - cardMargin;

    // Set max-width for card image
    cardImg.style.maxWidth = `${availableWidth}px`;
  });
}

// Call resize function when window is resized
window.addEventListener('resize', resizeCardImages);

// Call resize function on page load
window.addEventListener('load', resizeCardImages);

// Scroll left and right functionality for card container
document.querySelector('.scroll-left').addEventListener('click', function() {
  document.querySelector('.card__container').scrollLeft -= 200; // Adjust scroll amount as needed
});

document.querySelector('.scroll-right').addEventListener('click', function() {
  document.querySelector('.card__container').scrollLeft += 200; // Adjust scroll amount as needed
});
