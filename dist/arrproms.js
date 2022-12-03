'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.p2 = exports.options = exports.p1 = exports.requestOptions = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Movie Database
var requestOptions = exports.requestOptions = {
	method: 'GET',
	redirect: 'follow'
};

var p1 = exports.p1 = (0, _nodeFetch2.default)('https://api.themoviedb.org/3/find/tt0137523?api_key=b265254358428aa197cc46c74fc8c596&language=en-US&external_source=imdb_id', requestOptions).then(function (response) {
	return response.json();
}).then(function (resolve) {
	return resolve.movie_results[0];
}).then(function (results) {
	return results.title;
});

//VideoGame Database

var options = exports.options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '57f0506ec1msh9af3927f987a346p16bdd0jsn2a42a6362eb5',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};

var p2 = exports.p2 = (0, _nodeFetch2.default)('https://opencritic-api.p.rapidapi.com/game/8351', options).then(function (response) {
	return response.json();
}).then(function (res) {
	return res.name;
});