class AnimeController < ApplicationController

    def index
        @anime = Anime.includes(:studio).all
        render: index
    end

    def show
        formatted_title = params[:title].split("-").join(" ")
        @anime = Anime.includes(:studio, reviews: [:author]).find_by(title: formatted_title)
        render: show
    end
end