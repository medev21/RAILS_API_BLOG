//the controller relies on the post model from models folder
angular.module('app')
       .controller('MainCtrl', ['Post', '$scope', function(Post, $scope){
         $scope.posts = Post.index();

         $scope.savePost = function(){
           post = Post.save($scope.newPost);

           $scope.posts.push(post);
           $scope.newPost = {}
         }
       }]);
