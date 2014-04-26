app.controller("MainController", function($scope){
    $scope.understand = "I now understand how the scope works!";
    var url = 'http://in.bookmyshow.com/getHTML.bms?cmd=MOVIESCS';
    $http.get(url).then(function(response){
        $scope.data = resonse.data;
    })
});
