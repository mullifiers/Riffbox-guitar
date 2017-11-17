
/**************************
 App ui Services
 loggit - Creates a logit type message for all logging
 **************************/

angular.module("app.ui.services", []).factory("loggit", [
    function() {
        var logIt;
        return toastr.options = {
            closeButton: !0,
            positionClass: "toast-top-right",
            timeOut: "3000"
        }, logIt = function(message, type) {
            return toastr[type](message);
        }, {
            log: function(message) {
                logIt(message, "info");
            },
            logWarning: function(message) {
                logIt(message, "warning");
            },
            logSuccess: function(message) {
                logIt(message, "success");
            },
            logError: function(message) {
                logIt(message, "error");
            }
        };
    }
]).factory("ArtistListingSrv",
  function($http) {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var ArtistListingObj = {},
      artists = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    ArtistListingObj.getArtists = function(callback){

      $http.get('dist/data/artists.json').success(function(data) {

        artists = data;

        ArtistListingObj.artists = artists;
        callback(data);

      });

    };

    return ArtistListingObj;

  }).factory("AlbumsListingSrv",
  function($http) {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var AlbumListingObj = {},
      albums = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    AlbumListingObj.getAlbums = function(callback){

      $http.get('dist/data/albums.json').success(function(data) {

        albums = data;

        AlbumListingObj.albums = albums;
        callback(data);

      });

    };

    return AlbumListingObj;

  })
  .factory("GenresListingSrv",
  function($http) {

    /**************************
     Gets genres list with image url and name from the Server
     **************************/

    var GenresListingObj = {},
      genres = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    GenresListingObj.getGenres = function(callback){

      $http.get('dist/data/genres.json').success(function(data) {

        genres = data;

        GenresListingObj.genres = genres;
        callback(data);

      });

    };

    return GenresListingObj;


  }).factory("AlbumSrv",
  function($http) {

    /**************************
     Gets artists with all songs from the "Server"
     **************************/

    var PlayListObj = {},
      albums = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    PlayListObj.getSongs = function(callback){

      $http.get('dist/data/albumsMusic.json').success(function(data) {

        albums = data;

        PlayListObj.albums = albums;
        callback(data);

      });

    };

    PlayListObj.getAlbum = function(title,callback) {

      PlayListObj.getSongs(function(data){

        _.map(PlayListObj.albums, function(albumSongs){

          if(albumSongs.url_name == title){
            return callback(albumSongs);
          }
        });

      });

    };

    return PlayListObj;

  })
  .factory("ArtistSrv",
  function($http) {

    /**************************
     Gets artists with all songs from the "Server"
     **************************/

    var PlayListObj = {},
      artists = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    PlayListObj.getSongs = function(callback){

      $http.get('dist/data/artistsMusic.json').success(function(data) {

        artists = data;

        PlayListObj.artists = artists;
        callback(data);

      });

    };

    PlayListObj.getArtist = function(title,callback) {

      PlayListObj.getSongs(function(data){

        _.map(PlayListObj.artists, function(artistSongs){

          if(artistSongs.url_name == title){
            return callback(artistSongs);
          }
        });

      });

    };

    return PlayListObj;

  })
  .factory("PlayListSrv",
  function() {

    /**************************
     Saves and loads Playlists from the localStorage
     **************************/

    var PlayListObj = {},
      playlists = {
        list: []
      };

    var storage_id = "playlists_local_list";

    /**************************
     Initialize with some default values
     **************************/

    playlists.list[0] = {
      url_name: 'greatest-heats',
      name: 'Greatest hits',
      banner: 'dist/images/playlists/playlistbanner.jpg',
      image: 'dist/images/songs/song10.jpg',
      genre: [],
      songs: [
        {image: 'dist/images/songs/song1.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - Come Together', type: "audio/mpeg" },
        {image: 'dist/images/songs/song2.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Drive my car', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song3.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Beatles - Loser', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song4.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - All my loving', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song5.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Taxman', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song6.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - Come Together', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song7.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Drive my car', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song8.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Beatles - Loser', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song9.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - All my loving', type: "audio/mpeg"  }
      ]
    };

    playlists.list[1] = {
      url_name: 'songsofdream',
      name: 'Sons of Dream',
      banner: 'dist/images/playlists/playlistbanner.jpg',
      image: 'dist/images/songs/song11.jpg',
      genre: ['New age','Celtic','World'],
      songs: [
        {image: 'dist/images/songs/song12.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Enya - Laetha', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song13.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Enya - Only if', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song14.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Enya - Trains and winter rains', type: "audio/mpeg" },
        {image: 'dist/images/songs/song15.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Drive my car', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song16.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Beatles - Loser', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song17.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - All my loving', type: "audio/mpeg"  }
      ]
    };

    PlayListObj.get = function (){
      return JSON.parse(localStorage.getItem(storage_id) || JSON.stringify(playlists));
    };

    PlayListObj.put = function (playlist,callback){

      PlayListObj.playlists.push(playlist);

      localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));

      setTimeout(function(){
        callback(localStorage.getItem(storage_id));
      },500);
    };

    PlayListObj.update = function (playlists){

      PlayListObj.playlists = playlists;

      return localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));
    };

    //Replace with get from localStorage
    PlayListObj.playlistsObj = PlayListObj.get();
    //PlayListObj.playlistsObj = playlists;

    PlayListObj.playlists = PlayListObj.playlistsObj.list;

    PlayListObj.getPlaylist = function(title,callback) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.url_name == title){
          return callback(playlist);
        }
      });

    };

    PlayListObj.addSongToPlaylist = function(song,playListName) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.name == playListName){

          playlist.songs.push(song);

          PlayListObj.update(PlayListObj.playlists);
        }

      });

    };

    PlayListObj.removeSongFromPlaylist = function(song,playListName) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.name == playListName){

          _.map(playlist.songs, function(songOnList){

            if(songOnList.url == song.url){

              playlist.songs = _.without(playlist.songs,songOnList);

              console.log(PlayListObj.playlists);

              PlayListObj.update(PlayListObj.playlists);

            }

          });

        }

      });

    };

    return PlayListObj;

  }).factory("navigationMenuService",
  function() {

    /**************************
     Provides a way to toggle the menu scope
     **************************/

    var MENU_STATES = {
      menu:true,
      playing:false
    };

    return MENU_STATES;


  }).factory("CreatePlaylistSrv",['$uibModal','$log','PlayListSrv','$location',function($uibModal,$log,PlayListSrv,$location) {

    /**************************
     Provides a way to create a new playlist
     **************************/

    var CreatePlayListSrvObj = {};

    CreatePlayListSrvObj.openCreateModal = function(song){

     var modalInstance = $uibModal.open({
       templateUrl: 'app/views/forms/create_playlist.html',
       controller: 'CreatePlaylistInstanceCtrl',
       resolve: {
         playlistName: function () {
           return '';
         },
         song: function () {
           return song;
         }
       }
     });

     modalInstance.result.then(function (response) {

       var songs = [],
         playlistName;

       if(typeof response.song != "undefined"){
         songs.push(response.song);
       }

       playlistName = response.playlistName;

       //Callback for a Okay on Save new playlist
       var url_name = playlistName.toLowerCase().replace(" ","-"),
       new_playlist = {
         url_name: url_name,
         name: playlistName,
         banner: 'dist/images/playlists/playlistbanner.jpg',
         image: 'dist/images/songs/song17.jpg',
         genre: [],
         songs: songs
       };

       PlayListSrv.put(new_playlist,function(response){

         window.location = "#/playlist/" + url_name;
       });

     }, function () {
        $log.info('Modal dismissed at: ' + new Date());
     });

     };

    return CreatePlayListSrvObj;


  }]);
