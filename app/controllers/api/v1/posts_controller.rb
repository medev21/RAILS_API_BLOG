class Api::V1::PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  #  before_action :find_post

 def index
  #  respond_with(Post.all.order("created_at DESC"))
  render json: Post.all.order("created_at DESC")
 end

 def show
  #  render json: @post
  render json: Post.find(params[:id])
 end

 def created
   @post = Post.new(post_params)
   if @post.save
     render status: 200, json: {
       message: "successfully create a post",
       post: post
     }.to_json
   else
     render status: 422, json: {
       errors: post.errors
     }.to_json
   end
 end

 private
  def post_params
    params.require(:posts).permit(:title, :description)
  end

  # def find_post
  #   @post = Post.find(params[:id])
  # end
end
