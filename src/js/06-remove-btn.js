//** Remove button in favs section

function removeFavs(event) {
  const selectedFavBtn = event.currentTarget;
  //cada remove btn tiene asignado en html un id con dataset
  const selectedFavBtnId = parseInt(selectedFavBtn.dataset.id);
  console.log(selectedFavBtnId);
  // console.log("Holi, estoy escuchando al remove btn");
  // paintFavorites();
  // paintShows();
  // listenShows();
  // for (let i = 0; i < favoritedShowsId.length; i++) {
  //   if (selectedFavBtnId === 0) {
  //     console.log("Do nothing");
  //   }
  // }
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
