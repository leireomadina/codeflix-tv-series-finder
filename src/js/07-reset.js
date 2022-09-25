//** 07 - Remove all favorited shows

const deleteBtnEl = document.querySelector(".js-delete-btn");

const resetFavorites = () => {
  favoritedShows = [];
  localStorage.removeItem("favoritedShows");
  handleNoFavs();
  paintFavorites();
  paintShows();
  listenFavs();
  listenShows();
};

deleteBtnEl.addEventListener("click", resetFavorites);
