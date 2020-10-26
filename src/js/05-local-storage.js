//** 05 - Local storage

function setLocalStorage() {
 const selectedFavs = localStorage.setItem("favoritedShows", JSON.stringify(favoritedShows));
}

function getLocalStorage() {
  const localFavs = localStorage.getItem("favoritedShows"); 
  const localFavsJson = JSON.parse(localFavs);
  if(localFavsJson !== null) {
    //al array de favs le asignamos lo guardado en el local storage
    favoritedShows = localFavsJson;
    paintFavorites();
    listenShows();
  } else {
    //llamamos al server
    getData();
  }
}

getLocalStorage();