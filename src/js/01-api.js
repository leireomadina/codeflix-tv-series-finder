//** 01 - API

// HTML elements
const searchInput = document.querySelector(".js-search");
const btn = document.querySelector(".js-btn");
const resultsContainer = document.querySelector(".js-results-container");

// Array that will be filled after the user's search
let searchedShows = [];

// Fetch function to get the data from the API TVMaze
const getData = () => {
  const apiBaseUrl = "//api.tvmaze.com/search/shows?q=";
  const userSearch = searchInput.value;
  fetch(`${apiBaseUrl} + ${userSearch}`)
    .then((response) => response.json())
    .then(function (data) {
      if (data.length === 0) {
        showNotFound();
      } else {
        searchedShows = data;
        paintShows();
        listenShows();
        listenFavs();
      }
    })
    .catch((error) => handleServerError(error));
};

const showNotFound = () => {
  if (data.length === 0) {
    const newContent = document.createTextNode(
      "Oops, that show is not on our database. Try again!"
    );
    createParagraph(newContent);
  }
};

// Creates a paragraph using advanced DOM to show error messages
const createParagraph = (newContent) => {
  const newParagraph = document.createElement("p");
  resultsContainer.appendChild(newParagraph);
  newParagraph.appendChild(newContent);
  newParagraph.classList.add("error-message");
};

// Creates an error message when the server connection fails
const handleServerError = (error) => {
  console.log("Sorry, an unexpected error has ocurred:", error);
  const newContent = document.createTextNode(
    "Server error: I'm sorry, please try again later."
  );
  createParagraph(newContent);
};

// Event listener
btn.addEventListener("click", getData);
// getData();
