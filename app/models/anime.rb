# == Schema Information
#
# Table name: anime
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text
#  genre        :string
#  release_year :integer          not null
#  price        :float            not null
#  studio_id    :integer          not null
#

class Anime < ApplicationRecord 
    validates :title, :release_year, :price, :studio_id, presence: true

    def self.pull_recs(recs_hash)
        titles = recs_hash.values
        anime = Anime.where("title IN (?)",titles)
        
        return_anime = []
        until return_anime.length == anime.length
            random = anime.sample
            return_anime.push(random) unless return_anime.include?(random)
        end

        return_anime
    end

    def self.get_genres
        Anime
            .pluck(:genre)
            .map {|genre_str| genre_str.split(" ")}
            .flatten
            .map(&:downcase)
            .uniq
            .map { |g| g.split("/").map(&:capitalize).join("/") }
    end

    def self.get_years
        Anime
            .distinct
            .order("release_year ASC")
            .pluck(:release_year)
    end

    def self.search_for(search_params)
        title = search_params[:title]
        studios = search_params[:studios]
        years = search_params[:years]

        genres = search_params[:genres]
        genres_search = genres.map {|g| "genre LIKE '%#{g}%'"}.join(" OR ") unless genres.nil?

        offset = ( search_params[:page].to_i - 1 ) * 10
        offset = 0 if offset < 0

        case title
        when nil
            case genres
            when nil
                case studios
                when nil
                    case years
                    when nil
                        Anime
                        .includes(:studio)
                        .offset(offset)
                        .order("title ASC")
                    else # year filter
                        Anime
                        .includes(:studio)
                        .where("release_year IN (?)",years)
                        .offset(offset)
                        .order("title ASC")
                    end
                else # studio filter
                    case years
                    when nil
                        Anime
                        .includes(:studio)
                        .where("studios.name IN (?)",studios).references(:studio)
                        .offset(offset)
                        .order("title ASC")
                    else # year filter
                        Anime
                        .includes(:studio)
                        .where("studios.name IN (?)",studios).references(:studio)
                        .where("release_year IN (?)",years)
                        .offset(offset)
                        .order("title ASC")
                    end
                end
            else # genres filter
                case studios
                when nil
                    case years
                    when nil
                        Anime
                        .includes(:studio)
                        .where(genres_search)
                        .offset(offset)
                        .order("title ASC")
                    else # year filter
                        Anime
                        .includes(:studio)
                        .where(genres_search)
                        .where("release_year IN (?)",years)
                        .offset(offset)
                        .order("title ASC")
                    end
                else # studio filter
                    case years
                    when nil
                        Anime
                        .includes(:studio)
                        .where(genres_search)
                        .where("studios.name IN (?)",studios).references(:studio)
                        .offset(offset)
                        .order("title ASC")
                    else # year filter
                        Anime
                        .includes(:studio)
                        .where(genres_search)
                        .where("studios.name IN (?)",studios).references(:studio)
                        .where("release_year IN (?)",years)
                        .offset(offset)
                        .order("title ASC")
                    end
                end
            end
        else # title filter
            case genres
            when nil
                case studios
                when nil
                    case years
                    when nil
                        Anime
                        .includes(:studio)
                        .where("UPPER(title) LIKE ?", "#{title.upcase}%")
                        .offset(offset)
                        .order("title ASC")
                    else # year filter
                        Anime
                        .includes(:studio)
                        .where("UPPER(title) LIKE ?", "#{title.upcase}%")
                        .where("release_year IN (?)",years)
                        .offset(offset)
                        .order("title ASC")
                    end
                else # studio filter
                    case years
                    when nil
                        Anime
                        .includes(:studio)
                        .where("UPPER(title) LIKE ?", "#{title.upcase}%")
                        .where("studios.name IN (?)",studios).references(:studio)
                        .offset(offset)
                        .order("title ASC")
                    else # year filter
                        Anime
                        .includes(:studio)
                        .where("UPPER(title) LIKE ?", "#{title.upcase}%")
                        .where("studios.name IN (?)",studios).references(:studio)
                        .where("release_year IN (?)",years)
                        .offset(offset)
                        .order("title ASC")
                    end
                end
            else # genres filter
                case studios
                when nil
                    case years
                    when nil
                        Anime
                        .includes(:studio)
                        .where("UPPER(title) LIKE ?", "#{title.upcase}%")
                        .where(genres_search)
                        .offset(offset)
                        .order("title ASC")
                    else # year filter
                        Anime
                        .includes(:studio)
                        .where("UPPER(title) LIKE ?", "#{title.upcase}%")
                        .where(genres_search)
                        .where("release_year IN (?)",years)
                        .offset(offset)
                        .order("title ASC")
                    end
                else # studio filter
                    case years
                    when nil
                        Anime
                        .includes(:studio)
                        .where("UPPER(title) LIKE ?", "#{title.upcase}%")
                        .where(genres_search)
                        .where("studios.name IN (?)",studios).references(:studio)
                        .offset(offset)
                        .order("title ASC")
                    else # year filter
                        Anime
                        .includes(:studio)
                        .where("UPPER(title) LIKE ?", "#{title.upcase}%")
                        .where(genres_search)
                        .where("studios.name IN (?)",studios).references(:studio)
                        .where("release_year IN (?)",years)
                        .offset(offset)
                        .order("title ASC")
                    end
                end
            end
        end
    end

    has_many :reviews,
    class_name: :Review,
    primary_key: :id,
    foreign_key: :anime_id

    belongs_to :studio,
    class_name: :Studio,
    primary_key: :id,
    foreign_key: :studio_id

    self.table_name = "anime"
end
