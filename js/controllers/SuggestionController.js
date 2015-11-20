app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function(index) {
    $scope.post.comments.push({
        body: $scope.comment,
        upvotes: 0
    })
};
    $scope.upVote = function(comment) {
    comment.upvotes += 1;
};

    // $scope.currentIndex = parseInt($routeParams.id);
    }]);

