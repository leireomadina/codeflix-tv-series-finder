//** 01 - API

// HTML elements
const searchInput = document.querySelector(".js-search");
const btn = document.querySelector(".js-btn");
const resultsContainer = document.querySelector(".js-results-container");

// Array that will be filled once the api returns data after the user's search
let searchedShows = [];

// Checks if the user writes something in the input
const handleSearch = () => {
  if (searchInput.value === "") {
    handleEmptySearch();
  } else {
    getDataFromApi();
  }
};

// Gets the data from the API TVMaze
const getDataFromApi = () => {
  const endpoint = "//api.tvmaze.com/search/shows?q=";
  const userSearch = searchInput.value;
  fetch(`${endpoint} + ${userSearch}`)
    .then((response) => response.json())
    .then(function (data) {
      //checks if the data object is empty (not in API database)
      if (Object.entries(data).length === 0) {
        handleNotFound();
      } else {
        searchedShows = data;
        paintShows();
        createParagraph("");
        listenShows();
        listenFavs();
      }
    })
    .catch((error) => handleServerError(error));
};

const createParagraph = (innerContent) => {
  const newParagraph = `<p class="error-message">${innerContent}</p>`;
   return resultsContainer.innerHTML = newParagraph; 
 };

// Shows an error message when the input is empty
const handleEmptySearch = () => {
  createParagraph("First you need to write the name of a TV show :)");
};

// Shows a message when the tv show doesn't exist
const handleNotFound = () => {
  createParagraph("Oops, that show is not on our database. Try again!");
};

// Shows an error message when the server connection fails
const handleServerError = (error) => {
  console.log("Sorry, an unexpected error has ocurred:", error);
  createParagraph("Server error: I'm sorry, please try again later");
};

const preventSubmit = () => {
  btn;
};

// Event listener
 btn.addEventListener("click", handleSearch);
// searchInput.addEventListener("keyup", handleSearch);