class Api::PostsController < ApplicationController
 skip_before_filter :verify_authenticity_token
 before_action :find_post
 respond_to :json

 def index
   respond_with(Post.all.order("created_at DESC"))
 end


 private
  def post_params
    params.require(:posts).permit(:title, :description)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
