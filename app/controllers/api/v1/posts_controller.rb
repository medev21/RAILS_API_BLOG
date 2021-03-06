class Api::V1::PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  #  before_action :find_post

 def index
  #  respond_with(Post.all.order("created_at DESC"))
  render json: Post.all.order("id DESC")
 end

 def show
  #  render json: @post
  render json: Post.find(params[:id])
 end

 def create
   @post = Post.create(post_params)
   if @post.save
     render status: 200, json: {
       message: "successfully create a post",
       post: @post
     }.to_json
   else
     render status: 422, json: {
       errors: @post.errors
     }.to_json
   end
 end

 def update
   @post = Post.find(params[:id])

   if @post.update(post_params)
     render status: 200, json: {
       message: "succefully updated post",
       post: @post
     }.to_json
   else
     render status: 422, json: {
       message: "failed to update post",
       post: @post
     }.to_json
   end
 end

 def destroy
   @post = Post.find(params[:id])
   @post.destroy
   render status: 200, json: {
     message: "post deleted"
   }.to_json
 end

 private
  def post_params
    params.require(:post).permit(:title, :description)
  end

  # def find_post
  #   @post = Post.find(params[:id])
  # end
end
