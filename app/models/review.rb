# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  rating     :integer          not null
#  author_id  :integer          not null
#  anime_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :title, :body, :rating, :author_id, :anime_id, presence: true

    def self.find_relevant_reviews(anime_title)
        Review.includes(:anime)
            .where("anime.title = ?", anime_title)
            .references(:anime)
    end

    belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

    belongs_to :anime,
    class_name: :Anime,
    primary_key: :id,
    foreign_key: :anime_id
end
