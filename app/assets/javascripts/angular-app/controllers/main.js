//the controller relies on the post model from models folder
angular.module('app')
       .controller('MainCtrl',['Post', '$scope', function(Post, $scope){


        $scope.posts = Post.query(); //get all posts
        $scope.newPost = new Post(); //empty newPost

        //adding a post
        $scope.addPost = function(post){

          post.$save(); //save post to rails
          $scope.posts.push(post); //pushes new post to the $scope.posts - query
          console.log($scope.posts);
          $scope.newPost = new Post(); //set newPost empty
          $scope.posts = Post.query(); //get all posts and update it
        }

        //destroying a post
        // function index same as $index
        $scope.removePost = function(index){
          post = $scope.posts[index]; //find post w/ index from $scope.posts and set that into a var
          Post.delete(post); //delete that post
          $scope.posts.splice(index, 1); //update $scope.posts by removing deleted post
        }

      }]);
