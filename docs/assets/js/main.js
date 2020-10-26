const searchInput=document.querySelector(".js-search"),btn=document.querySelector(".js-btn");let searchedShows=[];function getData(){const e=searchInput.value;fetch("//api.tvmaze.com/search/shows?q= + "+e).then(e=>e.json()).then((function(e){searchedShows=e,console.log("entro en get data"),console.log(searchedShows),paintShows(),listenShows(),listenFavs()}))}btn.addEventListener("click",getData),getData();const showsContainer=document.querySelector(".js-shows-container"),wrapperEl=document.querySelector(".page-wrapper");function paintShows(){let e="";for(let o=0;o<searchedShows.length;o++){const s=searchedShows[o].show.name;if(e+=`<li class="shows-list__item js-show-item" data-id="${searchedShows[o].show.id}">`,null!=searchedShows[o].show.image){e+=`<img src="${searchedShows[o].show.image.original}" alt="Imagen de la serie ${s}" class="shows-list__img" title="Imagen de la serie ${s}"></img>`}else imgURL="./assets/images/noimg.jpg",e+=`<img src="${imgURL}" alt="Imagen de la serie ${s}" class="shows-list__img">`;e+=`<h3 class="shows-list__title">${s}</h3>`,e+="</li>",wrapperEl.classList.add("hidden")}showsContainer.innerHTML=e}let favoritedShows=[],favoritedShowsId=[];function selectFavorites(e){const o=e.currentTarget,s=parseInt(o.dataset.id),t=o.querySelector(".shows-list__title").innerHTML,a=o.querySelector(".shows-list__img").src;console.log("elemento clickado",o),console.log("id del elemento clickado",s);let i={id:s,name:t,image:a};favoritedShowsId=favoritedShows.map((function(e){return parseInt(e.id)})),console.log("array de ids",favoritedShowsId);const l=favoritedShowsId.indexOf(s);console.log("index de array de ids",l),console.log("serie fav de objecto constructor",i),-1===l?(console.log("Lo meto en el array"),favoritedShows.push(i),console.log(favoritedShows),o.classList.add("shows-list__item--favorite")):(console.log(i),favoritedShows.splice(l,1),o.classList.remove("shows-list__item--favorite"),console.log("Lo quito del array"),console.log(favoritedShows)),paintFavorites(),listenFavs(),setLocalStorage()}function listenShows(){const e=document.querySelectorAll(".js-show-item");for(const o of e)o.addEventListener("click",selectFavorites)}const favsContainer=document.querySelector(".js-favs-container");function paintFavorites(){let e="";for(let o=0;o<favoritedShows.length;o++){const s=favoritedShows[o].name,t=favoritedShows[o].id,a=favoritedShows[o].image;e+='<li class="favorites-list__item">',null!=favoritedShows[o].image?e+=`<img src="${a}" alt="Imagen de la serie ${s}" class="favorites-list__img" title="Imagen de la serie ${s}"></img>`:(a="https://via.placeholder.com/210x295/ffffff/666666/?",htmlShows+=`<img src="${a}" alt="Imagen de la serie ${s}" class="favorites-list__img`),e+=`<h4 class="favorites-list__title">${s}</h4>`,e+=`<input type="button" value="x" class="favorites-list__remove-btn" data-id="${t}">`,e+="</li>"}favsContainer.innerHTML=e,setLocalStorage()}function setLocalStorage(){localStorage.setItem("favoritedShows",JSON.stringify(favoritedShows))}function getLocalStorage(){const e=localStorage.getItem("favoritedShows"),o=JSON.parse(e);null!==o?(favoritedShows=o,paintFavorites(),listenShows()):getData()}function removeFavs(e){for(let o=0;o<favoritedShows.length;o++){const s=e.currentTarget,t=parseInt(s.dataset.id);console.log("id del btn seleccionado",t);const a=parseInt(favoritedShows[o].id);t===a&&(console.log("Entra en if"),console.log("id del show favorito",a),console.log("posición del elem en arrat favs",[o]),favoritedShows.splice([o],1))}paintFavorites(),paintShows(),listenFavs(),listenShows()}function listenFavs(){const e=document.querySelectorAll(".favorites-list__remove-btn");for(const o of e)o.addEventListener("click",removeFavs)}getLocalStorage();