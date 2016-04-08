//the controller relies on the post model from models folder
angular.module('app')
       .controller('MainCtrl',['Post', '$scope', function(Post, $scope){


        $scope.posts = Post.query();
        $scope.newPost = new Post();

        //adding a post
        $scope.addPost = function(post){

          post.$save();
          $scope.posts.push(post);
          console.log($scope.posts);
          $scope.newPost = new Post();
        }

        //destroying a post
        $scope.removePost = function(post){
          Post.delete(post);
        }

      }]);
