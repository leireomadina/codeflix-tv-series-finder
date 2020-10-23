//** API related JS code

// Get elements and define tv-series array

const searchInput = document.querySelector(".js-search");
const tvSeriesContainer = document.querySelector(".js-series-container");
const btn = document.querySelector(".js-btn");
// let tvSeries = [];
let searchedShows = [];

// Fetch

fetch("http://api.tvmaze.com/search/shows?q=girls")
  .then(function(response) {
    // console.log(response);
    return response.json();
  })
  .then(function(data){
    //
    for (let i = 0; i < data.length; i++) {
      searchedShows = data[i];
      console.log(searchedShows);
      console.log(data[i].show.name);
      console.log(data[i].show.image.medium);
    }
  })

/*
function getData() {
  const userSearch = searchInput.value;
  console.log(userSearch);
  fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
    .then(function (response) {
      console.log(response);
    })
    // .then((response) => response.json);
    .then(function (data) {
      console.log("información", data);
      // tvSeries = data.show;
      // console.log(tvSeries);
      // paintCards();
    });
}

// getData();
btn.addEventListener("click", getData);

*/
