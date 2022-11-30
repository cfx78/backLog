//Movie Database
var requestOptions = {
	method: 'GET',
	redirect: 'follow',
};

export let p1 = fetch(
	'https://api.themoviedb.org/3/find/tt0137523?api_key=b265254358428aa197cc46c74fc8c596&language=en-US&external_source=imdb_id',
	requestOptions,
);

//VideoGame Database
var myHeaders = new Headers();
myHeaders.append('Client-ID', 'd80bscu9md48poqbqt3jferv3eiu3l');
myHeaders.append('Authorization', 'Bearer 1km9ctw1ga3hghy2a2u7ca4v94444n');
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append(
	'Cookie',
	'__cf_bm=AazfxqUNYTbMmgjPQEs5vLXZkUck4.aDteD8Ui.iab0-1669787063-0-Acy9zruvGBFErzrDURQff+LQ1n6ZhDEOrsvaoD/KiWHkNiIt+YCgwmuG8Vjg2bbaBD64qG7YK+Xx34L/r8BYsf4=',
);

var raw = 'fields name;\r\n limit 10;';

var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	body: raw,
	redirect: 'follow',
};

export let p2 = fetch('https://api.igdb.com/v4/games', requestOptions);
