# == Schema Information
#
# Table name: purchases
#
#  id       :bigint           not null, primary key
#  anime_id :integer          not null
#  cart_id  :integer          not null
#  quantity :integer
#

class Purchase < ApplicationRecord
    belongs_to :anime,
    class_name: :Anime,
    primary_key: :id,
    foreign_key: :anime_id

    belongs_to :cart,
    class_name: :Cart,
    primary_key: :id,
    foreign_key: :cart_id
end
