//** 01 - API 

// HTML elements
const searchInput = document.querySelector(".js-search");
const btn = document.querySelector(".js-btn");

// Array that will be filled after the user's search
let searchedShows = [];

// Fetch function to get the data from the API TVMaze
function getData() {
  const apiBaseUrl = "//api.tvmaze.com/search/shows?q=";
  const userSearch = searchInput.value;
  fetch(`${apiBaseUrl} + ${userSearch}`)
    .then((response) => response.json())
    .then(function (data) {
      searchedShows = data;
      paintShows();
      listenShows();
      listenFavs();
    });
}

// Event listener
btn.addEventListener("click", getData);

getData();
