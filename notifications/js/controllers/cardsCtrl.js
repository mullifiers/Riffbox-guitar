
app.controller('cardsCtrl',function($rootScope, $document,$scope,$http,$mdColors,$mdDialog,$timeout,$mdToast, $q, $log,Animations,hotkeys,MovieBuffer) {
    var self = this;
  $scope.initial=true

//xls.utils.book_append_sheet(wob,xls.utils.json_to_sheet(parnneeet),'mysheetyppi');

  var socket = io.connect('http://localhost:8008/chat')
  socket.on('connect',function(e){
    console.log(e)
  })
  socket.emit('start_process')
  
$scope.notification=''
  socket.on('status',function(data){
    
    $scope.$apply(function(){
      $scope.notification=data;
      $scope.initial=false
    });
    if(data=='done')
    {
      window.location.replace('http://localhost:8008/player/')
    }
    
    console.log(data)
  })
self.notification=function(){return data};
   
   $scope.percentComplete=0;
   $scope.zoom=125;
   $scope.MovieBuffer=MovieBuffer;
   
  

})
