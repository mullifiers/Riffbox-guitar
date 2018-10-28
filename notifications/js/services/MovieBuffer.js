
angular.module('MovieBufferModule',[]).service('MovieBuffer',function($mdDialog,$mdToast){
        
        
        var self=this;
       
        self.port = 3000;
        self.initial = true
 
})
.directive('scrolly',function (MovieBuffer) {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            var raw = element[0];
            console.log('loading directive');
            element.bind('scroll', function () {
                console.log('in scroll');
                console.log(raw.scrollTop + raw.offsetHeight);
                console.log(raw.scrollHeight);
                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight-1) { //at the bottom
                    MovieBuffer.atBottom=1;}
                else
                    MovieBuffer.atBottom=0;
                
            })
        }
    }});