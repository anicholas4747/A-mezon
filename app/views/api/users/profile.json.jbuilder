json.extract! @user, :username, :email, :created_at
json.reviews do 
    json.array! @user.authored_reviews do |review|
        json.extract! review, :id, :title, :body, :rating, :updated_at
        json.anime review.anime.title
        json.anime_id review.anime.id
        json.imageURL review.anime.image_url
    end
end
