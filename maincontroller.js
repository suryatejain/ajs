app.controller("MainController", function($scope,$http){
    $scope.understand = "I now understand how the scope works!";
    delete $http.defaults.headers.common['X-Requested-With'];
    var url = 'http://in.bookmyshow.com/getHTML.bms?cmd=MOVIESCS';
    $http.get(url).then(function(response){
        $scope.data = response.data;
    })
});
