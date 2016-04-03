//the controller relies on the post model from models folder
angular.module('app')
       .controller('MainCtrl', ['Post', '$scope', function(Post, $scope){
         $scope.posts = Post.query();
       }]);
