app.controller("MainController", function($scope,$http){
    $scope.understand = "I now understand how the scope works!";
    var url = 'http://in.bookmyshow.com/getHTML.bms?cmd=MOVIESCS';
    $http.get(url).then(function(response){
        console.log(response)
        $scope.data = resonse.data;
    })
});
