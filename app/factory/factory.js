var app = angular.module('spotifyApp')
app.factory('spotifyFactory', function($http){
	var token = 'BQDLxCOphdjrhc1JMyLlGx_6h78f1-kuLMp0Z1J1MAZD3WvlzLUTSx5DCrwt3E1Qb1ArSap3OMMAQteDrOzGJZmw892b6nacIOlDCaaRoWrP1rZVt4rwtVp0Ny-Y-0wB4RVGq5c0tqvIuYM'
	var getArtists =  function (nameArtist){
		audio.pause()
		var url = 'https://api.spotify.com/v1/search?type=artist&query=' + nameArtist;
		return $http.get(url, {
            headers: {
                'Authorization':'Bearer ' + token
            }
		}).then(function(response) {
            return response.data.artists.items
        })
	}

	var getAlbums =  function (artistId){
		audio.pause()
		var url = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
	
        return $http.get(url, {
            headers: {
                'Authorization':'Bearer ' + token
            }
		}).then(function(response) {
                return response.data.items
        })
	}

	var getSongs =  function (albumId){
		audio.pause()
		var url = 'https://api.spotify.com/v1/albums/' + albumId + '/tracks';
	
        return $http.get(url, {
            headers: {
                'Authorization':'Bearer ' + token
            }
		}).then(function(response) {
                return response.data.items
        })
	}

	//var showPreview = function(previewUrl) {

	//}

	return {
		getArtists: getArtists,
		getAlbums: getAlbums,
		getSongs: getSongs
	}
})