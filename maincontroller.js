app.controller("MainController", function($scope,$http){
    $scope.understand = "I now understand how the scope works!";
    var url = 'http://zuxfer.com/sample.JSON';
    $http.get(url).then(function(response){
        console.log(response)
        $scope.data = resonse.data;
    })
});
