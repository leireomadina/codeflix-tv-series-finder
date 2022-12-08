//** 05 - Local storage

const setLocalStorage = () => {
 const selectedFavs = localStorage.setItem("favoritedShows", JSON.stringify(favoritedShows));
}

function getLocalStorage() {
  const localFavs = localStorage.getItem("favoritedShows"); 
  const localFavsJson = JSON.parse(localFavs);
  //prevents unnecessary server requests
  if(localFavsJson !== null) {
    favoritedShows = localFavsJson;
    paintFavorites();
    listenShows();
  }
}

getLocalStorage();