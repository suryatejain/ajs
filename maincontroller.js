app.controller("MainController", function($scope,$http){
    $scope.understand = "I now understand how the scope works!";
    var url = 'data.JSON';
    $http.get(url).then(function(response){
        $scope.data = response.data;
    });
    
    url = "got-data.JSON";
    $http.get(url).then(function(response){
        $scope.characters = response.data;
    })
});
