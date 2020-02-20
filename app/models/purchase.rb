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
    def self.delete_all_from_cart(purchase_id)
        relevant_purchase = Purchase.find_by(id: purchase_id)
        relevant_cart_id = relevant_purchase.cart_id
        relevant_anime_id = relevant_purchase.anime_id

        Purchase
            .where(cart_id: relevant_cart_id)
            .where(anime_id: relevant_anime_id)
            .each {|purchase| purchase.destroy}
    end

    belongs_to :anime,
    class_name: :Anime,
    primary_key: :id,
    foreign_key: :anime_id

    belongs_to :cart,
    class_name: :Cart,
    primary_key: :id,
    foreign_key: :cart_id
end
