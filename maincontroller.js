app.controller("MainController", function($scope,$http){
    $scope.understand = "I now understand how the scope works!";
    var url = 'data.JSON';
    $http.get(url).then(function(response){
        console.log(response)
        $scope.data = response.data;
    })
});
