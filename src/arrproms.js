//* Movie Database
var requestOptions = {
	method: 'GET',
	redirect: 'follow',
};

export let p1 = fetch(
	'https://api.themoviedb.org/3/find/tt0137523?api_key=b265254358428aa197cc46c74fc8c596&language=en-US&external_source=imdb_id',
	requestOptions,
)
	.then((response) => response.json())
	.then((resolve) => resolve.movie_results[0])
	.then((results) => results.title);

//* VideoGame Database

const optionsVGDB = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '57f0506ec1msh9af3927f987a346p16bdd0jsn2a42a6362eb5',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
	},
};

export let p2 = fetch(
	'https://opencritic-api.p.rapidapi.com/game/8351',
	optionsVGDB,
)
	.then((response) => response.json())
	.then((res) => res.name);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '57f0506ec1msh9af3927f987a346p16bdd0jsn2a42a6362eb5',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
	},
};

export let p3 = fetch(
	'https://spotify23.p.rapidapi.com/search/?q=Because%20The%20Internet&type=multi&offset=0&limit=10&numberOfTopResults=5',
	options,
)
	.then((response) => response.json())
	.then((res) => res.albums.items[0].data.name);
