json.details do 
    json.extract! @anime, :title, :description, :genre, :release_year, :price
end
json.studio @anime.studio.name
json.reviews do
    @anime.reviews.each do |review|
        json.extract! review, :title, :body, :rating
        json.author review.author.username
    end
end