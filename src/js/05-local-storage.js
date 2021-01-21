//** 05 - Local storage

const setLocalStorage = () => {
 const selectedFavs = localStorage.setItem("favoritedShows", JSON.stringify(favoritedShows));
}

function getLocalStorage() {
  const localFavs = localStorage.getItem("favoritedShows"); 
  const localFavsJson = JSON.parse(localFavs);
  //prevents unnecessary calls to the server if the data is already stored in the local storage
  if(localFavsJson !== null) {
    //assigns the favs array data to the local storage info within the JSON file
    favoritedShows = localFavsJson;
    paintFavorites();
    listenShows();
  } else {
    getDataFromApi();
  }
}

getLocalStorage();