class Api::StudiosController < ApplicationController

    def index
        @studios = Studio.all.order("name ASC")
        render :index
    end

    def show
        formatted_name = params[:name].split("-").join(" ")
        @studio = Studio.includes(:produced_anime).find_by(name: formatted_name)
        render :show
    end
end