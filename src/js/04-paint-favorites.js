//** 04 - Paint favorites

const handleNoFavs = () => {
	if (favoritedShows.length === 0) {
		noFavsContainer.innerHTML = `<p class="no-favs">You still don't have anything marked as favorites.</p>`;
	}
};

const paintFavorites = () => {
	favsContainer.innerHTML = '';

	for (let i = 0; i < favoritedShows.length; i++) {
		const { name, id, image } = favoritedShows[i];

		const liElement = document.createElement('li');
		const imgElement = document.createElement('img');
		const h4Element = document.createElement('h4');
		const inputElement = document.createElement('input');
		const showNameContent = document.createTextNode(name);

		favsContainer.appendChild(liElement);
		liElement.classList.add('favorites-list__item');
		liElement.appendChild(imgElement);
		liElement.appendChild(h4Element);
		liElement.appendChild(inputElement);
		
		imgElement.classList.add('favorites-list__img');
		if (image !== null) {
			imgElement.src = image;
			imgElement.setAttribute('alt', `${name} TV show image`);
		} else {
			imgElement.src = './assets/images/nopicture.png';
			imgElement.setAttribute('alt', 'This TV show has no image');
		}
		
		h4Element.classList.add('favorites-list__title');
		h4Element.appendChild(showNameContent);
		
		inputElement.value = 'x';
		inputElement.classList.add('favorites-list__remove-btn');
		inputElement.setAttribute('data-id', id);
		inputElement.setAttribute('type', 'button');
	}

	handleNoFavs();
	setLocalStorage();
};
