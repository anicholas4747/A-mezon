# == Schema Information
#
# Table name: studios
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  site_url    :string
#

class Studio < ApplicationRecord
    validates :name, presence: true

    has_many :produced_anime,
    class_name: :Anime,
    primary_key: :id,
    foreign_key: :studio_id
end
