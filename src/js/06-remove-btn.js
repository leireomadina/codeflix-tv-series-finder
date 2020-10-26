//** 06 - Remove button in favorites section

function removeFavs(event) {
  //cada remove btn tiene asignado en html un id con dataset
  for (let i = 0; i < favoritedShows.length; i++) {
    const selectedFavBtn = event.currentTarget;
    const selectedFavBtnId = parseInt(selectedFavBtn.dataset.id);
    console.log("id del btn seleccionado", selectedFavBtnId);
    const favoritedShowId = parseInt(favoritedShows[i].id);
     if (selectedFavBtnId === favoritedShowId) {
      console.log("Entra en if");
      console.log("id del show favorito", favoritedShowId);
      console.log("posición del elem en arrat favs", [i]);
      favoritedShows.splice([i], 1);
    }
  }
  paintFavorites();
  paintShows();
  listenFavs();
  listenShows()
}

// listener to remove favs from favs section
function listenFavs() {
  const removeButtons = document.querySelectorAll(
    ".favorites-list__remove-btn"
  );
  for (const removeButton of removeButtons) {
    removeButton.addEventListener("click", removeFavs);
  }
}
