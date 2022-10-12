//** 01 - API

const searchInput = document.querySelector(".js-search");
const buttonEl = document.querySelector(".js-btn");
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
const getDataFromApi = async() => {
  const ENDPOINT = "//api.tvmaze.com/search/shows?q=";
  const userSearch = searchInput.value;

  try {
    const resp = await fetch(`${ENDPOINT} + ${userSearch}`);
    if(!resp.ok) throw "Im sorry, there has been a server error. Try again later!";
    const data = await resp.json();
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
  } catch (error) {
    handleServerError(error);
  }

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
  createParagraph("Im sorry, there has been a server error. Try again later!");
  handleBackgroundImage();
};

buttonEl.addEventListener("click", handleSearch);
