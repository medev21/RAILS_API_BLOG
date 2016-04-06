//the controller relies on the post model from models folder
angular.module('app')
       .controller('MainCtrl', function(Post, $scope){


        $scope.posts = Post.query();
        $scope.newPost = new Post();

        $scope.addPost = function(post){
          $scope.posts.push(post);

          post.$save();

          $scope.newPost = new Post();
        }

       });
