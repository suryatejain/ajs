app.controller("MainController", function($scope,$http){
    $scope.understand = "I now understand how the scope works!";
    var url = 'http://in.bookmyshow.com/getHTML.bms?cmd=MOVIESCS';
    $http.jsonp(url).success(function(response){
        $scope.data = response.data;
    })
});
