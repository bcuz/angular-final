app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
    $scope.posts = suggestions.posts;


    $scope.addSuggestion = function(index) {
      $scope.posts.push({
    title: 'Retrofit water fountain with Gatorade',
    upvotes: 7,
    comments: [],
    })
};
    }]);

