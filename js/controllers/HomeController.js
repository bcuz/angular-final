app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
    $scope.posts = suggestions.posts;


    $scope.addSuggestion = function(index) {
    $scope.posts.push({
    title: $scope.title,
    upvotes: 0,
    comments: [],
    })

};
    }]);

