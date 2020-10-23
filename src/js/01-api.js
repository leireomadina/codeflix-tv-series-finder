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
  .then(function(response) {
    // console.log(response);
    return response.json();
  })
  .then(function(data){
    searchedShows = data;
    console.log(searchedShows);
    paintShows();
  })
}

// Paint function

function paintShows() {
  //loop to get the name and img of each show
  for (let i = 0; i < searchedShows.length; i++) {
    // searchedShows = data;
    // console.log(searchedShows);
    console.log(searchedShows[i].show.name);
    console.log(searchedShows[i].show.image.medium);
  }
}

// Event listener and function calling

btn.addEventListener("click", getData);

getData();
