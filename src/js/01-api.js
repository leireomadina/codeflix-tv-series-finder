//** API 

// Get elements and define tv-series array

const searchInput = document.querySelector(".js-search");
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
      console.log("entro en get data");
      console.log(searchedShows);
      paintShows();
      listenShows();
      listenFavs();
    });
}

// Event listener and function calling

btn.addEventListener("click", getData);

getData();
