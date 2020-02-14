class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in, except: [:index]

    def index
        @reviews = Review.includes(:author).find_relevant_reviews(params[:title])
        render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id

        if @review.save
            render "api/anime/#{params(:title)}"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        if @review.update(review_params)
            render "api/anime/#{params(:title)}"
        else
            render @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review.destroy
        render "api/anime/#{params(:title)}"
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :rating, :anime_id)
    end
end