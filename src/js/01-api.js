//** 01 - API 

// Get search elements and define tv-series array

const searchInput = document.querySelector(".js-search");
const btn = document.querySelector(".js-btn");
// initially empty array that will be filled after the user's search
let searchedShows = [];

// Fetch function to get the data from the API

function getData() {
  //remove https to solve githubs error
  const apiBaseUrl = "//api.tvmaze.com/search/shows?q=";
  const userSearch = searchInput.value;
  // console.log(userSearch);
  fetch(`${apiBaseUrl} + ${userSearch}`)
    .then((response) => response.json())
    .then(function (data) {
      // console.log(data);
      searchedShows = data;
      paintShows();
      listenShows();
      listenFavs();
    });
}

// Event listener and function calling

btn.addEventListener("click", getData);

getData();
