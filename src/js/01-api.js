//** API related JS code

// Get elements and define tv-series array

const searchInput = document.querySelector(".js-search");
const showsContainer = document.querySelector(".js-shows-container");
const btn = document.querySelector(".js-btn");
let searchedShows = [];

// Fetch function

function getData() {
  const apiBaseUrl = "http://api.tvmaze.com/search/shows?q=";
  const userSearch = searchInput.value;
  fetch(`${apiBaseUrl} + ${userSearch}`)
    .then((response) => response.json())
    .then(function (data) {
      searchedShows = data;
      // console.log(searchedShows);
      paintShows();
    });
}

// Paint function

function paintShows() {
  let htmlShow = "";
  // let showItem = {};
  //loop to get the name and img of each show
  for (let i = 0; i < searchedShows.length; i++) {
    //POSIBLE MEJORA: crear un objeto vacío??????
    //MEJORA: usar DOM avanzado
    // console.log(searchedShows[i].show.name);
    // console.log(searchedShows[i].show.image.medium);
    // let showImage = searchedShows[i].show.image.medium;
    const showName = searchedShows[i].show.name;
    htmlShow += `<li style="background-color: #ccc" class="shows-list__item" id="${i}">`;
    htmlShow += `<h2 class="shows-list__title">${showName}</h2>`;
    htmlShow += `</li>`;
    if (searchedShows[i].show.image != null) {
      let imgURL = searchedShows[i].show.image.medium;
      htmlShow += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" style="height: 200px" class="shows-list__img" title="Imagen de la serie ${showName}"></img>`;
    } else {
      imgURL =
        "https://via.placeholder.com/210x295/ffffff/666666/?";
      htmlShow += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" style="height: 200px" class="shows-list__img`;
    }
  }
  showsContainer.innerHTML = htmlShow;
}

// Event listener and function calling

btn.addEventListener("click", getData);

getData();
