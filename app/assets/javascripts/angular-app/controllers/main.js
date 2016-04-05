//the controller relies on the post model from models folder
angular.module('app')
       .controller('MainCtrl', function(Post, $scope){


        $scope.posts = Post.query();
        // $scope.newPost = new Post();

        $scope.addPost = function(){
          var post = Post.save($scope.newPost);
          $scope.posts.push(post);

          $scope.newPost = '';
        }

       });
