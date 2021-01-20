//** 07 - Remove all favorited shows

//HTML elements
const deleteBtnEl = document.querySelector(".js-delete-btn");

// Removes all favorites at once
const resetFavorites = () => {
  favoritedShows = [];
  localStorage.removeItem("favoritedShows");
  paintFavorites();
  listenFavs();
};

//event
deleteBtnEl.addEventListener("click", resetFavorites);
