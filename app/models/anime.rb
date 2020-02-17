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
        Anime.where("title IN (?)",titles)
    end

    def self.search_for(search_params)
        search_term = search_params[:search_term]
        offset = ( search_params[:page].to_i - 1 ) * 10

        if search_term == nil
            Anime
                .offset(offset)
                .limit(10)
                .order("title ASC")
        else
            Anime
                .where("UPPER(title) LIKE ?", "#{search_term.upcase}%")
                .offset(offset)
                .limit(10)
                .order("title ASC")
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
