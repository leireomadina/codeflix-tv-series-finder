//** 05 - Local storage

//function to set the local storage and transform the JS favorited array data to a JSON string
function setLocalStorage() {
 const selectedFavs = localStorage.setItem("favoritedShows", JSON.stringify(favoritedShows));
}

//function that transforms the JSON string again into a JS array data

function getLocalStorage() {
  const localFavs = localStorage.getItem("favoritedShows"); 
  const localFavsJson = JSON.parse(localFavs);
  //conditional to prevent unnecessary calls to the server if the data is already stored in the local storage
  if(localFavsJson !== null) {
    //assigns the favs array data to the local storage info within the JSON file
    favoritedShows = localFavsJson;
    paintFavorites();
    listenShows();
  } else {
    //calls the server
    getData();
  }
}

getLocalStorage();