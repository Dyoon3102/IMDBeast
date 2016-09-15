class ImdbController < ApplicationController
  def index
  end

  # def search
  #   movie= Movie.where(name: params[:keyword]).first
  #   # binding.pry
  #   if movie
  #     render json: movie
  #   else
  #     render :nothing => true, status: 404
  #   end
  # end
  # def recent
  #   Tweet.ordered_json
  #   tweets = Tweet.ordered_json
  #   render json: tweets
  # end

  # def search
  #   hashtag = Hashtag.where(name: params[:keyword]).first
  #   # binding.pry
  #   if hashtag
  #     render json: hashtag.tweets.ordered_json
  #   else
  #     render :nothing => true, status: 404
  #   end
  # end

  # def create
 		
  # end

  #   render json: tweet.to_json(methods: :hashtag_names)
  # end

  # private

  # def tweet_params
  #   params.require(:tweet).permit( :content, :username, :handle, :avatar_url )
  # end

end
