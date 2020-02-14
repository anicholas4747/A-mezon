json.details do 
    json.extract! @anime, :id, :title, :description, :genre, :release_year, :price
end
json.studio @anime.studio.name
json.reviews do
    json.array! @anime.reviews do |review|
        json.extract! review, :id, :title, :body, :rating, :updated_at
        json.author review.author.username
        json.anime @anime.title
    end
end