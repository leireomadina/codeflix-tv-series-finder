//** 06 - Remove button in favorites section

const removeFav = (event) => {
  for (let i = 0; i < favoritedShows.length; i++) {
    const selectedFavBtn = event.currentTarget;
    const selectedFavBtnId = parseInt(selectedFavBtn.dataset.id);
    const favoritedShowId = parseInt(favoritedShows[i].id);
     if (selectedFavBtnId === favoritedShowId) {
      favoritedShows.splice([i], 1);
    }
  }
  paintFavorites();
  paintShows();
  listenFavs();
  listenShows();
  handleNoFavs();
}

const listenFavs = () => {
  const removeButtons = document.querySelectorAll(
    ".favorites-list__remove-btn"
  );
  for (const removeButton of removeButtons) {
    removeButton.addEventListener("click", removeFav);
  }
}
