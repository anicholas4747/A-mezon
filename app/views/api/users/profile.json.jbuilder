json.extract! @user, :username, :email, :created_at
json.reviews do 
    json.array! @user.authored_reviews do |review|
        json.extract! review, :title, :body, :rating, :updated_at
        json.anime review.anime.title
    end
end
