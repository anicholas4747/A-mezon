class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in, except: [:index]

    def index
        @reviews = Review.includes(:author).find_relevant_reviews(params[:title])
        render :index
    end

    def show
        @review = Review.includes(:anime).find_by(id: params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        
        if @review.save
            @anime = Anime.find_by(id: params[:review][:anime_id])
            render "api/anime/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            @anime = Anime.find_by(id: params[:review][:anime_id])
            render "api/anime/show"
        else
            render @review.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @review = Review.find_by(id: params[:id]).destroy
        @anime = Anime.find_by(title: params[:review][:anime])
        render "api/anime/show"
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :rating, :anime_id)
    end
end