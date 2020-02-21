json.details do 
    json.extract! @anime, :id, :title, :description, :genre, :release_year, :price
    json.rating @anime.ave_rating
    json.titleJP @anime.title_jp
    json.imageURL @anime.image_url
end
json.studio @anime.studio.name
json.reviews do
    json.array! @anime.reviews do |review|
        json.extract! review, :id, :title, :body, :rating, :updated_at
        json.author review.author.username
        json.anime @anime.title
    end
end