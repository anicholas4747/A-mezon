json.extract! @anime, :title, :description, :genre, :release_year, :price
json.studio @anime.studio.name
json.array! @anime.reviews do |review|
    json.set! review.id do
        json.extract! review, :title, :body, :rating
        json.author review.author.username
    end
end