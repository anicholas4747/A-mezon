# == Schema Information
#
# Table name: carts
#
#  id      :bigint           not null, primary key
#  user_id :integer          not null
#

class Cart < ApplicationRecord
    validates :user_id, uniqueness: true

    belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

    has_many :purchases,
    class_name: :Purchase,
    primary_key: :id,
    foreign_key: :cart_id

    has_many :anime,
    through: :purchases,
    source: :anime
end
