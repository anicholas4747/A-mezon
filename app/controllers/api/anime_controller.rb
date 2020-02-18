class Api::AnimeController < ApplicationController

    def index
        @anime = Anime.includes(:studio).all
        render :index
    end

    def titles
        @anime = Anime.all
        render :titles
    end
    
    def genres
        @genres = Anime.get_genres
        render :genres
    end

    def recs
        @recs = Anime.pull_recs(params[:recs])
        render :recs
    end

    def search
        @results = Anime.search_for(search_params)
        render :search_results
    end

    def show
        formatted_title = params[:title].split("-").join(" ")
        @anime = Anime.includes(:studio, reviews: [:author]).find_by(title: formatted_title)
        render :show
    end

    private
    def search_params
        params.require(:search).permit(:title, :genres, :studios, :years, :page)
    end
end