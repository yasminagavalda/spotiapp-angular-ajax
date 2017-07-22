var app = angular.module('spotifyApp')
app.controller('searchController', function($scope, spotifyFactory){


	$scope.searchArtists = function(){
		$scope.artistsReceived = ''
		$scope.albumsReceived = ''
		$scope.songsReceived = ''
		spotifyFactory.getArtists($scope.artist)
		.then(function(response){
			$scope.artistsReceived = response;
		})
	}
	
	$scope.searchAlbums = function(artistId){
		$scope.albumsReceived = ''
		$scope.songsReceived = ''
		spotifyFactory.getAlbums(artistId)
		.then(function(response){
			$scope.albumsReceived = response;
		})
	}

	$scope.searchSongs = function(albumId, albumImage){
		$scope.songsReceived = ''
		spotifyFactory.getSongs(albumId)
		.then(function(response){
			$scope.songsReceived = response;
		})
		$scope.albumImage = albumImage
	}

	$scope.reproduce = function(previewUrl){
       	$scope.preview = previewUrl
	}
	
})