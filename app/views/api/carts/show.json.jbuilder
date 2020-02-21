json.array! @cart.purchases do |item|
    json.extract! item, :id, :quantity, :anime_id
    json.extract! item.anime, :title, :price
    json.studioName item.anime.studio.name
    json.imageURL item.anime.image_url
    json.rating item.anime.ave_rating
    json.titleJP item.anime.title_jp
end