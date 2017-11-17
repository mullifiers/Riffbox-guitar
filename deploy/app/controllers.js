/*
 Application controllers
 Main controllers for the app
 */

angular.module("app.controllers", [])
  .controller("AdminAppCtrl", ["$scope", "$location",
    function ($scope, $location) {
      $scope.checkIfOwnPage = function () {
        return _.contains(["/front", "/404", "/pages/500", "/pages/login", "/pages/signin", "/pages/signin1", "/pages/signin2", "/pages/signup", "/pages/signup1", "/pages/signup2", "/pages/forgot", "/pages/lock-screen"], $location.path());
      };

      $scope.checkIfFixedPage = function () {
        return _.contains(["/dashboard"], $location.path());
      };

      $scope.info = {
        theme_name: "Kimono",
        user_name: "Jane Doe"
      };

    }
  ])
  .controller("NavCtrl", ['navigationMenuService',
    function (navigationMenuService) {

      this.navigationState = navigationMenuService;

      this.SwitchToMenu = function () {
        navigationMenuService.menu = true;
        navigationMenuService.playlist = false;
      };

      this.SwitchToPlaylist = function () {
        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;
      };

    }
  ])
  .controller("ActionsCtrl", ['$scope', function ($scope) {

    this.toggleChat = function () {
      $('.chat-bar').toggleClass("visible");
    };

  }
  ]);

/*
 App Form validations
 Validator functions for form elements (signIn,signUp and custom forms)
 */

angular.module("app.form.validation", []).controller("wizardFormCtrl", ["$scope",
  function ($scope) {
    return $scope.wizard = {
      firstName: "some name",
      lastName: "",
      email: "",
      password: "",
      age: "",
      address: ""
    }, $scope.isValidateStep1 = function () {
      return void 0;
    }, $scope.finishedWizard = function () {
      return void 0;
    };
  }
]).controller("formConstraintsCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.form = {
      required: "",
      minlength: "",
      maxlength: "",
      length_rage: "",
      type_something: "",
      confirm_type: "",
      foo: "",
      email: "",
      url: "",
      num: "",
      minVal: "",
      maxVal: "",
      valRange: "",
      pattern: ""
    }, original = angular.copy($scope.form), $scope.revert = function () {
      return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
    };
  }
]).controller("signinCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.user = {
      email: "",
      password: ""
    }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
      return $scope.user = angular.copy(original), $scope.form_signin.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_signin.$valid && !angular.equals($scope.user, original);
    }, $scope.submitForm = function () {
      return $scope.showInfoOnSubmit = !0, $scope.revert();
    };
  }
]).controller("signupCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.user = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: ""
    }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
      return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_signup.$valid && !angular.equals($scope.user, original);
    }, $scope.submitForm = function () {
      return $scope.showInfoOnSubmit = !0, $scope.revert();
    };
  }
]).directive("validateEquals", [
  function () {
    return {
      require: "ngModel",
      link: function (scope, ele, attrs, ngModelCtrl) {
        var validateEqual;
        return validateEqual = function (value) {
          var valid;
          return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({
            value: void 0
          }) : void 0;
        }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function (newValue, oldValue) {
          return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0;
        });
      }
    };
  }
]);


/*
 App Form Ui Controls
 Controllers for form Ui components
 */

angular.module("app.ui.form.ctrls", []).controller("TagsDemoCtrl", ["$scope",
  function ($scope) {
    $scope.tags = ["foo", "bar"];
  }
]).controller("DatepickerDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.today = function () {
      $scope.dt = new Date();
    }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function () {
      $scope.showWeeks = !$scope.showWeeks;
    }, $scope.clear = function () {
      $scope.dt = null;
    }, $scope.disabled = function (date, mode) {
      return "day" === mode && (0 === date.getDay() || 6 === date.getDay());
    }, $scope.toggleMin = function () {
      var _ref;
      $scope.minDate = null !== (_ref = $scope.minDate) ? _ref : {
        "null": new Date()
      };
    }, $scope.toggleMin(), $scope.open = function ($event) {
      return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0;
    }, $scope.dateOptions = {
      "year-format": "'yy'",
      "starting-day": 1
    }, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0];
  }
]).controller("TimepickerDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.mytime = new Date(), $scope.hstep = 1, $scope.mstep = 15, $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    }, $scope.ismeridian = !0, $scope.toggleMode = function () {
      $scope.ismeridian = !$scope.ismeridian;
    }, $scope.update = function () {
      var d;
      return d = new Date(), d.setHours(14), d.setMinutes(0), $scope.mytime = d;
    }, $scope.changed = function () {
      return void 0;
    }, $scope.clear = function () {
      $scope.mytime = null;
    };
  }
]).controller("TypeaheadCtrl", ["$scope",
  function ($scope) {
    return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  }
]).controller("RatingDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function (value) {
      return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max);
    }, $scope.ratingStates = [{
      stateOn: "glyphicon-ok-sign",
      stateOff: "glyphicon-ok-circle"
    }, {
        stateOn: "glyphicon-star",
        stateOff: "glyphicon-star-empty"
      }, {
        stateOn: "glyphicon-heart",
        stateOff: "glyphicon-ban-circle"
      }, {
        stateOn: "glyphicon-heart"
      }, {
        stateOff: "glyphicon-off"
      }];
  }
]);


/*
 App Tables
 Controller for dynamic and other tables
 */

angular.module("app.tables", []).controller("tableCtrl", ["$scope", "$filter",
  function ($scope, $filter) {
    var init;
    return $scope.stores = [{
      name: "Nijiya Market",
      price: "$$",
      sales: 292,
      rating: 4
    }, {
        name: "Eat On Monday Truck",
        price: "$",
        sales: 119,
        rating: 4.3
      }, {
        name: "Tea Era",
        price: "$",
        sales: 874,
        rating: 4
      }, {
        name: "Rogers Deli",
        price: "$",
        sales: 347,
        rating: 4.2
      }, {
        name: "MoBowl",
        price: "$$$",
        sales: 24,
        rating: 4.6
      }, {
        name: "The Milk Pail Market",
        price: "$",
        sales: 543,
        rating: 4.5
      }, {
        name: "Nob Hill Foods",
        price: "$$",
        sales: 874,
        rating: 4
      }, {
        name: "Scratch",
        price: "$$$",
        sales: 643,
        rating: 3.6
      }, {
        name: "Gochi Japanese Fusion Tapas",
        price: "$$$",
        sales: 56,
        rating: 4.1
      }, {
        name: "Cost Plus World Market",
        price: "$$",
        sales: 79,
        rating: 4
      }, {
        name: "Bumble Bee Health Foods",
        price: "$$",
        sales: 43,
        rating: 4.3
      }, {
        name: "Costco",
        price: "$$",
        sales: 219,
        rating: 3.6
      }, {
        name: "Red Rock Coffee Co",
        price: "$",
        sales: 765,
        rating: 4.1
      }, {
        name: "99 Ranch Market",
        price: "$",
        sales: 181,
        rating: 3.4
      }, {
        name: "Mi Pueblo Food Center",
        price: "$",
        sales: 78,
        rating: 4
      }, {
        name: "Cucina Venti",
        price: "$$",
        sales: 163,
        rating: 3.3
      }, {
        name: "Sufi Coffee Shop",
        price: "$",
        sales: 113,
        rating: 3.3
      }, {
        name: "Dana Street Roasting",
        price: "$",
        sales: 316,
        rating: 4.1
      }, {
        name: "Pearl Cafe",
        price: "$",
        sales: 173,
        rating: 3.4
      }, {
        name: "Posh Bagel",
        price: "$",
        sales: 140,
        rating: 4
      }, {
        name: "Artisan Wine Depot",
        price: "$$",
        sales: 26,
        rating: 4.1
      }, {
        name: "Hong Kong Chinese Bakery",
        price: "$",
        sales: 182,
        rating: 3.4
      }, {
        name: "Starbucks",
        price: "$$",
        sales: 97,
        rating: 3.7
      }, {
        name: "Tapioca Express",
        price: "$",
        sales: 301,
        rating: 3
      }, {
        name: "House of Bagels",
        price: "$",
        sales: 82,
        rating: 4.4
      }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
        var end, start;
        return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end);
      }, $scope.onFilterChange = function () {
        return $scope.select(1), $scope.currentPage = 1, $scope.row = "";
      }, $scope.onNumPerPageChange = function () {
        return $scope.select(1), $scope.currentPage = 1;
      }, $scope.onOrderChange = function () {
        return $scope.select(1), $scope.currentPage = 1;
      }, $scope.search = function () {
        return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange();
      }, $scope.order = function (rowName) {
        return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0;
      }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function () {
        return $scope.search(), $scope.select($scope.currentPage);
      }), $scope.search();
  }
]);

/*
 App Ui Controllers
 Provides general controllers for the app
 */

angular.module("app.ui.ctrls", []).controller("NotifyCtrl", ["$scope", "loggit",
  function ($scope, loggit) {
    $scope.notify = function (type) {
      switch (type) {
        case "info":
          return loggit.log("Hello! This is an alert of the info importance level.");
        case "success":
          return loggit.logSuccess("Great! You did something successfully.");
        case "warning":
          return loggit.logWarning("Warning! Something that happened that is not critical but important.");
        case "error":
          return loggit.logError("Error! Something went terribly wrong and needs your attention.");
      }
    };
  }
]).controller("AlertDemoCtrl", ["$scope",
  function ($scope) {
    $scope.alerts = [{
      type: "success",
      msg: "Great! You did something successfully."
    }, {
        type: "info",
        msg: "Hello! This is an alert of the info importance level."
      }, {
        type: "warning",
        msg: "Warning! Something that happened that is not critical but important."
      }, {
        type: "danger",
        msg: "Error! Something went terribly wrong and needs your attention."
      }];

    $scope.addAlert = function () {
      $scope.alerts.push({ msg: 'Another alert!' });
    };

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };
  }
]).controller("ProgressDemoCtrl", ["$scope",
  function ($scope) {
    $scope.max = 200;

    $scope.random = function () {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function () {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
        var index = Math.floor((Math.random() * 4));
        $scope.stacked.push({
          value: Math.floor((Math.random() * 30) + 1),
          type: types[index]
        });
      }
    };
    $scope.randomStacked();
  }
]).controller("AccordionDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.oneAtATime = !0, $scope.groups = [{
      title: "First Group Header",
      content: "First Group Body"
    }, {
        title: "Second Group Header",
        content: "Second Group Body"
      }, {
        title: "Third Group Header",
        content: "Third Group Body"
      }], $scope.items = ["Item 1", "Item 2", "Item 3"], $scope.status = {
        isFirstOpen: !0,
        isFirstOpen1: !0,
        isFirstOpen2: !0,
        isFirstOpen3: !0,
        isFirstOpen4: !0,
        isFirstOpen5: !0,
        isFirstOpen6: !0
      }, $scope.addItem = function () {
        var newItemNo;
        newItemNo = $scope.items.length + 1;
        $scope.items.push("Item " + newItemNo);
      };
  }
]).controller("CollapseDemoCtrl", ["$scope",
  function ($scope) {
    $scope.isCollapsed = !1;
  }
])
  .controller("ModalDemoCtrl", ["$scope", "$uibModal", "$log",
    function ($scope, $uibModal, $log) {
      $scope.items = ['item1', 'item2', 'item3'];

      $scope.open = function (size) {

        var uibModalInstance = $uibModal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

        uibModalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };
    }
  ]).controller("ModalInstanceCtrl", ["$scope", "$uibModalInstance", "items",
    function ($scope, $uibModalInstance, items) {
      $scope.items = items;
      $scope.selected = {
        item: $scope.items[0]
      };

      $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }
  ])
  .controller("PaginationDemoCtrl", ["$scope",
    function ($scope) {
      $scope.totalItems = 64;
      $scope.currentPage = 4;

      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };

      $scope.pageChanged = function () {
        console.log('Page changed to: ' + $scope.currentPage);
      };

      $scope.maxSize = 5;
      $scope.bigTotalItems = 175;
      $scope.bigCurrentPage = 1;
    }
  ])
  .controller("MapDemoCtrl", ["$scope", "$http", "$interval",
    function ($scope, $http, $interval) {
      var i, markers;
      for (markers = [], i = 0; 8 > i;) {
        markers[i] = new google.maps.Marker({
          title: "Marker: " + i
        });
        i++;
      }
      $scope.GenerateMapMarkers = function () {
        var d, lat, lng, loc, numMarkers;
        for (d = new Date(), $scope.date = d.toLocaleString(), numMarkers = Math.floor(4 * Math.random()) + 4, i = 0; numMarkers > i;) {
          lat = 38.73 + Math.random() / 100;
          lng = -9.14 + Math.random() / 100;
          loc = new google.maps.LatLng(lat, lng);
          markers[i].setPosition(loc);
          markers[i].setMap($scope.map);
          i++;
        }
      };
      $interval($scope.GenerateMapMarkers, 2e3);
    }
  ])
  .controller("TreeDemoCtrl", ["$scope",
    function ($scope) {
      // Parameters

      $scope.list = [{
        "id": 1,
        "title": "1. dragon-breath",
        "items": []
      }, {
          "id": 2,
          "title": "2. moiré-vision",
          "items": [{
            "id": 21,
            "title": "2.1. tofu-animation",
            "items": [{
              "id": 211,
              "title": "2.1.1. spooky-giraffe",
              "items": []
            }, {
                "id": 212,
                "title": "2.1.2. bubble-burst",
                "items": []
              }]
          }, {
              "id": 22,
              "title": "2.2. barehand-atomsplitting",
              "items": []
            }]
        }, {
          "id": 3,
          "title": "3. unicorn-zapper",
          "items": []
        }, {
          "id": 4,
          "title": "4. romantic-transclusion",
          "items": []
        }];

      $scope.callbacks = {};

      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.items.push({
          id: nodeData.id * 10 + nodeData.items.length,
          title: nodeData.title + '.' + (nodeData.items.length + 1),
          items: []
        });
      };
    }
  ]);


/*
 App Ui Controllers
 Provides general controllers for the app
 */

angular.module('app.music', ['mediaPlayer', 'ngDragDrop'])
  .controller('PlayListCtrl', ['$scope', 'PlayListSrv', 'CreatePlaylistSrv',
    function ($scope, PlayListSrv, CreatePlaylistSrv) {
      this.audioPlaylist = [];
      var CreateNewPlaylistSrv = CreatePlaylistSrv;

      this.userPlaylists = PlayListSrv.playlists;

      this.addSong = function (audioElement) {
        this.audioPlaylist.push(angular.copy(audioElement));
      };

      this.removeSong = function (index) {
        this.audioPlaylist.splice(index, 1);
      };

      this.dropSong = function (audioElement, index) {
        this.audioPlaylist.splice(index, 0, angular.copy(audioElement));
      };

      this.getSongImage = function (currentTrack) {
        if (typeof this.audioPlaylist[currentTrack - 1] != "undefined") {
          return this.audioPlaylist[currentTrack - 1].image;
        }
      };

      this.getSongArtist = function (currentTrack) {
        if (typeof this.audioPlaylist[currentTrack - 1] != "undefined") {
          return this.audioPlaylist[currentTrack - 1].artist;
        }
      };

      this.getSongName = function (currentTrack) {
        if (typeof this.audioPlaylist[currentTrack - 1] != "undefined") {
          return this.audioPlaylist[currentTrack - 1].title;
        }
      };

      this.seekPercentage = function ($event) {
        var percentage = ($event.offsetX / $event.target.offsetWidth);
        if (percentage <= 1) {
          return percentage;
        } else {
          return 0;
        }
      };

      this.createNewPlaylist = function (song) {

        CreateNewPlaylistSrv.openCreateModal(song);

      };

    }]).controller('ArtistListingCtrl', ['$scope', 'ArtistListingSrv',
      function ($scope, ArtistListingSrv) {

        $scope.ArtistsSrv = ArtistListingSrv;

        ArtistListingSrv.getArtists(function (data) {
          // no need to read data because its binded to $scope.AlbumsSrv
          // You can however process something only after the data comes back
        });

      }]).controller('AlbumsCtrl', ['$scope', 'AlbumsListingSrv',
        function ($scope, AlbumsListingSrv) {

          $scope.AlbumsSrv = AlbumsListingSrv;

          AlbumsListingSrv.getAlbums(function (data) {
            // no need to read data because its binded to $scope.AlbumsSrv
            // You can however process something only after the data comes back
          });


        }]).controller('GenresCtrl', ['$scope', 'GenresListingSrv',
          function ($scope, GenresListingSrv) {

            $scope.GenresSrv = GenresListingSrv;

            GenresListingSrv.getGenres(function (data) {
              // no need to read data because its binded to $scope.GenresSrv
              // You can however process something only after the data comes back
            });


          }])
  .controller('AlbumCtrl', ['$scope', '$routeParams', 'AlbumSrv', 'PlayListSrv', 'navigationMenuService', 'loggit',
    function ($scope, $routeParams, AlbumSrv, PlayListSrv, navigationMenuService, loggit) {

      this.AlbumSrv = AlbumSrv;
      var albumPlaylistVar = [];

      this.following = "Follow album";
      this.following_class = "btn-default";

      this.follow = function () {

        this.following = "Following";
        this.following_class = "btn-primary";

        loggit.logSuccess('Yaay!! You are now following this album');

      };

      AlbumSrv.getAlbum($routeParams.title, function (response) {

        if (typeof response.songs != "undefined") {

          _.map(response.songs, function (song) {

            /*Put them all together in one single list (for adding to new playlists for example)*/

            var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);

            albumPlaylistVar.push({
              image: song.image,
              src: song.url,
              url: song.url,
              type: song.type,
              artist: parseTitle[1],
              title: parseTitle[2],
              displayName: song.displayName
            });
          });

          $scope.albumName = response.name;
          $scope.albumImage = response.image;
          $scope.albumBanner = response.banner;
          $scope.albumGenre = response.genre;
          $scope.albumAbout = response.about;
        }

      });

      $scope.albumPlaylistVar = albumPlaylistVar;

      this.addSongs = function (playlist, callback) {

        _.each(albumPlaylistVar, function (audioElement) {
          playlist.push(angular.copy(audioElement));

          if ((albumPlaylistVar.indexOf(audioElement) + 1) == albumPlaylistVar.length) {
            // Callback goes here
            if (callback) {
              callback();
            }
          }

        });

        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;

      };

      this.addSongsAndPlay = function (playlist, mediaPlayer) {

        this.addSongs(playlist, function () {

          setTimeout(function () {
            mediaPlayer.play();
          }, 1000);

        });

      };

      this.addSongToPlaylist = function (song, playlist) {

        PlayListSrv.addSongToPlaylist(song, playlist);
      };

      this.toggleAlbumsList = function () {
        this.AlbumList = true;
        this.FullList = false;
      };

    }])
  .controller('ArtistCtrl', ['$scope', '$routeParams', 'ArtistSrv', 'PlayListSrv', 'navigationMenuService', 'loggit',
    function ($scope, $routeParams, ArtistSrv, PlayListSrv, navigationMenuService, loggit) {

      this.ArtistSrv = ArtistSrv;
      var artistPlaylistVar = [],
        artistPlaylistAlbums = [];


      this.AlbumList = true;
      this.FullList = false;
      this.following = "Follow artist";
      this.following_class = "btn-default";

      this.follow = function () {

        this.following = "Following";
        this.following_class = "btn-primary";

        loggit.logSuccess('Yaay!! You are now following this artist');

      };

      ArtistSrv.getArtist($routeParams.title, function (response) {

        if (typeof response.albums != "undefined") {

          _.map(response.albums, function (album) {

            artistPlaylistAlbums.push({
              album_name: album.album_name,
              album_image: album.album_image,
              album_release: album.album_release,
              songs: []
            });

            _.map(album.songs, function (song) {

              /*Put them all together in one single list (for adding to new playlists for example)*/

              var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);

              artistPlaylistVar.push({
                image: song.image,
                src: song.url,
                url: song.url,
                type: song.type,
                artist: parseTitle[1],
                title: parseTitle[2],
                displayName: song.displayName
              });

              /*Put songs also in this artist ordered by album*/

              artistPlaylistAlbums[artistPlaylistAlbums.length - 1].songs.push({
                image: song.image,
                src: song.url,
                url: song.url,
                type: song.type,
                artist: parseTitle[1],
                title: parseTitle[2],
                displayName: song.displayName
              });
            });

          });

          $scope.artistName = response.name;
          $scope.artistImage = response.image;
          $scope.artistBanner = response.banner;
          $scope.artistGenre = response.genre;
          $scope.artistAbout = response.about;

        }

      });

      $scope.artistPlaylist = artistPlaylistVar;
      $scope.artistPlaylistAlbums = artistPlaylistAlbums;


      this.addSongs = function (playlist, callback) {

        _.each(artistPlaylistVar, function (audioElement) {
          playlist.push(angular.copy(audioElement));

          if ((artistPlaylistVar.indexOf(audioElement) + 1) == artistPlaylistVar.length) {
            // Callback goes here
            if (callback) {
              callback();
            }
          }

        });

        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;

      };

      this.addSongsAndPlay = function (playlist, mediaPlayer) {

        this.addSongs(playlist, function () {

          setTimeout(function () {
            mediaPlayer.play();
          }, 1000);

        });

      };

      this.addSongToPlaylist = function (song, playlist) {

        PlayListSrv.addSongToPlaylist(song, playlist);
      };

      this.toggleAlbumsList = function () {
        this.AlbumList = true;
        this.FullList = false;
      };

      this.toggleFullList = function () {
        this.AlbumList = false;
        this.FullList = true;
      };


    }])
  .controller('UserPlayListCtrl', ['$routeParams', 'PlayListSrv', 'navigationMenuService',
    function ($routeParams, PlayListSrv, navigationMenuService) {

      this.PlayListSrv = PlayListSrv;
      var UserPlaylistVar = [],
        playlistTitle, playlistImage, playlistBanner, playlistGenre, playlistUrlName;

      PlayListSrv.getPlaylist($routeParams.title, function (response) {

        if (typeof response.songs != "undefined") {

          _.map(response.songs, function (song) {
            var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);
            UserPlaylistVar.push({
              image: song.image,
              src: song.url,
              url: song.url,
              type: song.type,
              artist: parseTitle[1],
              title: parseTitle[2],
              displayName: song.displayName
            });
          });

          playlistTitle = response.name;
          playlistImage = response.image;
          playlistBanner = response.banner;
          playlistGenre = response.genre;
          playlistUrlName = response.url_name;
        }

      });

      this.userPlaylist = UserPlaylistVar;
      this.playlistName = playlistTitle;
      this.playlistImage = playlistImage;
      this.playlistBanner = playlistBanner;
      this.playlistGenre = playlistGenre;
      this.playlistUrlName = playlistUrlName;

      this.addSongs = function (playlist, callback) {

        _.each(UserPlaylistVar, function (audioElement) {
          playlist.push(angular.copy(audioElement));

          if ((UserPlaylistVar.indexOf(audioElement) + 1) == UserPlaylistVar.length) {
            // Callback goes here
            if (callback) {
              callback();
            }
          }

        });

        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;

      };

      this.addSongsAndPlay = function (playlist, mediaPlayer) {

        this.addSongs(playlist, function () {

          setTimeout(function () {
            mediaPlayer.play();
          }, 1000);

        });

      };

      this.addSongToPlaylist = function (song, playlist) {

        PlayListSrv.addSongToPlaylist(song, playlist);
      };

      this.removeSongFromPlaylist = function (song, playlist) {

        PlayListSrv.removeSongFromPlaylist(song, playlist);

        //Remove from client so he notices immediately
        this.userPlaylist = _.without(this.userPlaylist, song);
      };

    }]).controller("CreatePlaylistInstanceCtrl", ["$scope", "$uibModalInstance", 'playlistName', 'song', 'loggit',
      function ($scope, $uibModalInstance, playlistName, song, loggit) {

        $scope.playlistName = playlistName;
        $scope.song = song;

        $scope.ok = function () {

          if ($scope.playlistName !== "") {
            $uibModalInstance.close($scope);
          }
          else {
            $uibModalInstance.dismiss('cancel');
            loggit.logError("Error! Could not create a playlist with no name..");
          }
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      }
    ]);
