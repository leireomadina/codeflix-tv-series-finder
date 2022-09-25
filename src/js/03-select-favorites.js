//** 03 - Select and remove favorites

const noFavsContainer = document.querySelector('.js-no-favs-container');

let favoritedShows = [];
// Adittional array to store the id of each selected show
let favoritedShowsId = [];

const selectFavorites = (event) => {
	const selectedShow = event.currentTarget;
	const selectedShowId = parseInt(selectedShow.dataset.id);
	const selectedShowName =
		selectedShow.querySelector('.shows-list__title').innerHTML;
	const selectedShowImage = selectedShow.querySelector('.shows-list__img').src;

	// Object template for each favorited show
	let favShow = {
		id: selectedShowId,
		name: selectedShowName,
		image: selectedShowImage,
	};

	// Gets the id of each favorited show and stores it in the favoritedShowsId array. Needed in order to use the indexOf and splice method later
	favoritedShowsId = favoritedShows.map(function (element) {
		return parseInt(element.id);
	});

	// Checks if the item is already in the favorite array
	const favoriteIndex = favoritedShowsId.indexOf(selectedShowId);
	if (favoriteIndex === -1) {
		favoritedShows.push(favShow);
	} else {
		favoritedShows.splice(favoriteIndex, 1);
	}

	// Highlights favorite shows
	if (!selectedShow.classList.contains('shows-list__item--favorite')) {
		selectedShow.classList.add('shows-list__item--favorite');
	} else {
		selectedShow.classList.remove('shows-list__item--favorite');
	}

	noFavsContainer.innerHTML = '';

	paintFavorites();
	listenFavs();
	setLocalStorage();
};

const listenShows = () => {
	const showItems = document.querySelectorAll('.js-show-item');
	for (const showItem of showItems) {
		showItem.addEventListener('click', selectFavorites);
	}
};
