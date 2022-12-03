//Movie Database
export var requestOptions = {
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

//VideoGame Database

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '57f0506ec1msh9af3927f987a346p16bdd0jsn2a42a6362eb5',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
	},
};

export let p2 = fetch(
	'https://opencritic-api.p.rapidapi.com/game/8351',
	options,
)
	.then((response) => response.json())
	.then((res) => res.name);
