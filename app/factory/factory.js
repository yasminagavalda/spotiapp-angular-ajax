var app = angular.module('spotifyApp')
app.factory('spotifyFactory', function($http){
	var token = 'BQAK1ETUKp0fb2In7jxsA8wXh3xr9KgjSOgRPhSsCDSyrERvPWCKXEPCnlH5gIGyLOJ87B5114gm_Ic3U4GX-3HpYnTNuCshwDgdtNLhhOR83rP7BiIhF5GXyLTP8DFaap0nych3adq9RWA'
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
