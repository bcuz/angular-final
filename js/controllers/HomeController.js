app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
    $scope.posts = suggestions.posts;


    $scope.addSuggestion = function(index) {
    $scope.posts.push({
    title: '',
    upvotes: 0,
    comments: [],
    })
      $scope.posts[$scope.posts.length -1].title = $(".form-control").val();
};
    }]);

