//** 02 - Paint search results

const paintShows = () => {
	showsContainer.innerHTML = '';
	
	for (let i = 0; i < searchedShows.length; i++) {
		const showName = searchedShows[i].show.name;
		const showId = searchedShows[i].show.id;
		const showImage = searchedShows[i].show.image;

		const liElement = document.createElement('li');
		const imgElement = document.createElement('img');
		const h3Element = document.createElement('h3');
		const showNameContent = document.createTextNode(showName);


		liElement.classList.add('shows-list__item', 'js-show-item');
		liElement.setAttribute('data-id', showId);
		liElement.appendChild(imgElement);
		liElement.appendChild(h3Element);

		// Not all API shows have image
		imgElement.classList.add('shows-list__img');
		if (showImage != null) {
			imgElement.src = searchedShows[i].show.image.original;
			imgElement.setAttribute('alt', `${showName} TV show image`);
		} else {
			imgElement.src = './assets/images/nopicture.png';
			imgElement.setAttribute('alt', 'This TV show has no image');
		}

		h3Element.classList.add('shows-list__title');
		h3Element.appendChild(showNameContent);

		pageWrapper.classList.add('hidden-bg');

		showsContainer.appendChild(liElement);
	}
};
