//** 04 - Paint favorites

const favsContainer = document.querySelector('.js-favs-container');

const handleNoFavs = () => {
	if (favoritedShows.length === 0) {
		noFavsContainer.innerHTML = `<p class="no-favs">You still don't have anything marked as favorites.</p>`;
	}
};

const paintFavorites = () => {
	let htmlFavShows = '';
	for (let i = 0; i < favoritedShows.length; i++) {
		const showFavName = favoritedShows[i].name;
		const showFavId = favoritedShows[i].id;
		const showFavImage = favoritedShows[i].image;
		htmlFavShows += `<li class="favorites-list__item">`;
		if (favoritedShows[i].image != null) {
			htmlFavShows += `<img src="${showFavImage}" alt="Imagen de la serie ${showFavName}" class="favorites-list__img" title="Imagen de la serie ${showFavName}"></img>`;
		} else {
			showFavImage = 'https://via.placeholder.com/210x295/ffffff/666666/?';
			htmlShows += `<img src="${showFavImage}" alt="Imagen de la serie ${showFavName}" class="favorites-list__img`;
		}
		htmlFavShows += `<h4 class="favorites-list__title">${showFavName}</h4>`;
		htmlFavShows += `<input type="button" value="x" class="favorites-list__remove-btn" data-id="${showFavId}">`;
		htmlFavShows += `</li>`;
	}
	favsContainer.innerHTML = htmlFavShows;

	handleNoFavs();
	setLocalStorage();
};
