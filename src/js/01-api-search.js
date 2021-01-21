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
        listenShows();
        listenFavs();
      }
    })
    .catch((error) => handleServerError(error));
};


// Creates a paragraph using advanced DOM to show error messages
// const createParagraph = (newContent) => {
//   const newParagraph = document.createElement("p");
//   resultsContainer.appendChild(newParagraph);
//   newParagraph.appendChild(newContent);
//   newParagraph.classList.add("error-message");
// };

// Shows a message when the tv show doesn't exist
const handleNotFound = () => {
  resultsContainer.innerHTML = `Oops, that show is not on our database. Try again!`;
    // const newContent = document.createTextNode(
    //   "Oops, that show is not on our database. Try again!"
    // );
    // createParagraph(newContent);
};

// Shows an error message when the server connection fails
const handleServerError = (error) => {
  console.log("Sorry, an unexpected error has ocurred:", error);
  // const newContent = document.createTextNode(
  //   "Server error: I'm sorry, please try again later."
  // );
  resultsContainer.innerHTML = `Server error: I'm sorry, please try again later.`;
  // createParagraph(newContent);
};

// Shows an error message when the input is empty
const handleEmptySearch = () => {
  // const newContent = document.createTextNode(
  //   "First you need to write the name of a TV show :)"
  // );
  // createParagraph(newContent);
  resultsContainer.innerHTML = `<p class="">First you need to write the name of a TV show :)</p>`;
};

// Event listener
btn.addEventListener("click", handleSearch);
searchInput.addEventListener("keyup", handleSearch);

