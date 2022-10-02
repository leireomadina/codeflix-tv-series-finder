//** 01 - API

const searchInput = document.querySelector(".js-search");
const btn = document.querySelector(".js-btn");
const resultsContainer = document.querySelector(".js-results-container");
const tipsContainer = document.querySelector(".js-tips-container");
const showsContainer = document.querySelector(".js-shows-container");
const wrapperEl = document.querySelector(".page-wrapper");

let searchedShows = [];

// Prevents unnecessary API requests
const handleSearch = () => {
  if (searchInput.value === "") {
    handleEmptySearch();
  } else {
    getDataFromApi();
  }
};

// TVMaze API connection
const getDataFromApi = () => {
  const endpoint = "//api.tvmaze.com/search/shows?q=";
  const userSearch = searchInput.value;
  fetch(`${endpoint} + ${userSearch}`)
    .then((response) => response.json())
    .then((data) => {
      if (Object.entries(data).length === 0) {
        handleNotFound();
      } else {
        searchedShows = data;
        resultsContainer.classList.add('hide');
        tipsContainer.classList.remove('hide');
        tipsContainer.innerHTML = '<p>Select a TV show to add it as favorite:</p>';
        createParagraph("First you need to write the name of a TV show :)");
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
  return (resultsContainer.innerHTML = newParagraph);
};

const handleBackgroundImage = () => {
  showsContainer.innerHTML = "";
  wrapperEl.classList.remove("page-wrapper");
  wrapperEl.classList.remove("hidden-bg");
  wrapperEl.classList.add("not-found");
};

const handleEmptySearch = () => {
  resultsContainer.classList.remove('hide');
  createParagraph("First you need to write the name of a TV show :)");
  handleBackgroundImage();
};

const handleNotFound = () => {
  resultsContainer.classList.remove('hide');
  createParagraph("Oops, that show is not on our database. Try again!");
  handleBackgroundImage();
};

const handleServerError = (error) => {
  resultsContainer.classList.remove('hide');
  console.log("Sorry, an unexpected error has ocurred:", error);
  createParagraph("Server error: I'm sorry, please try again later");
  handleBackgroundImage();
};

btn.addEventListener("click", handleSearch);
