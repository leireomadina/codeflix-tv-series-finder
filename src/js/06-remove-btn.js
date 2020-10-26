//** 06 - Remove button in favorites section

// Function to remove a favorited item using the remove button

function removeFavs(event) {
  //loop to check the id of each remove button: each one has a unique id by using dataset in the html
  for (let i = 0; i < favoritedShows.length; i++) {
    const selectedFavBtn = event.currentTarget;
    const selectedFavBtnId = parseInt(selectedFavBtn.dataset.id);
    console.log("id del btn seleccionado", selectedFavBtnId);
    const favoritedShowId = parseInt(favoritedShows[i].id);
    // if the button id is equal to the favorited show id: that show get removed from the favorites array
     if (selectedFavBtnId === favoritedShowId) {
      favoritedShows.splice([i], 1);
    }
  }
  paintFavorites();
  paintShows();
  listenFavs();
  listenShows()
}

// Listener to remove fav items from fav section

function listenFavs() {
  // selects all remove buttons and then uses a loop to go over them
  const removeButtons = document.querySelectorAll(
    ".favorites-list__remove-btn"
  );
  for (const removeButton of removeButtons) {
    removeButton.addEventListener("click", removeFavs);
  }
}
