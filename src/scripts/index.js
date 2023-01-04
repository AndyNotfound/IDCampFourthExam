import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

const drawer = document.querySelector("#drawer");
const menu = document.querySelector("#hamburgerMenu");

menu.addEventListener("click", (e) => {
  drawer.classList.toggle("open");
  e.stopPropagation();
});

function makeArticle(data) {
  const article = document.createElement("article");
  article.innerHTML = `
      <!-- Article Card -->
      <img src="${data.pictureId}" alt="${data.name} restaurant">
      <div class="city"><p>${data.city}</p></div>
      <div class="detail">
        <p class="rating">Rating : ${data.rating}</p>
        <a href="#detail" class="tittle">${data.name}</a>
        <p class="desc">${data.description}</p>
        </div>
  `;
  return article;
}

const data = require("../DATA.json");
document.addEventListener("DOMContentLoaded", () => {
  const { restaurants } = data;
  const articleWrapper = document.querySelector("#article-container");
  const recomendationWrapper = document.querySelector(
    "#recommendation-container"
  );

  restaurants.map((item) => {
    if (parseFloat(item.rating) >= 4.6) {
      if (recomendationWrapper.children.length < 4) {
        recomendationWrapper.append(makeArticle(item));
      } 
    }
    articleWrapper.append(makeArticle(item));
  });
});
