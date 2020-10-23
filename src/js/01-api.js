//** API related JS code

// Get elements and define tv-series array

const searchInput = document.querySelector(".js-search");
const showsContainer = document.querySelector(".js-shows-container");
const btn = document.querySelector(".js-btn");
let searchedShows = [];
//add variable to store API base url?

// Fetch function

function getData() {
  const userSearch = searchInput.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      searchedShows = data;
      console.log(searchedShows);
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
    let showName = searchedShows[i].show.name;
    // let imgURL ="";
    htmlShow += `<li style="background-color: #ccc" class="shows-list__item" id="${i}">`;
    htmlShow += `<h2 class="shows-list__title">${showName}</h2>`;
    htmlShow += `</li>`;
    if (searchedShows[i].show.image != null) {
      console.log("No tiene foto :(");
      htmlShow += `<img src="${searchedShows[i].show.image.medium}" alt="Imagen de la serie ${showName}" style="height: 200px" class="shows-list__img" title="Imagen de la serie ${showName}"></img>`;
    } else {
      const errorImageURL = "https://via.placeholder.com/210x295/ffffff/666666/?";
      htmlShow += `<img src="${errorImageURL}" alt="Imagen de la serie ${showName}" style="height: 200px" class="shows-list__img`;
    }
  }
  showsContainer.innerHTML = htmlShow;
}

// Event listener and function calling

btn.addEventListener("click", getData);

getData();
