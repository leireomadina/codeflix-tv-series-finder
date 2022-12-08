//** 07 - Remove all favorited shows

const resetFavorites = () => {
  favoritedShows = [];
  localStorage.removeItem("favoritedShows");
  handleNoFavs();
  paintFavorites();
  paintShows();
  listenFavs();
  listenShows();
};

deleteButton.addEventListener("click", resetFavorites);
