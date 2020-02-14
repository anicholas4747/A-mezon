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
