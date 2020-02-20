json.array! @cart.purchases do |item|
    json.extract! item, :id, :quantity, :anime_id
    json.extract! item.anime, :title, :price
    json.studioName item.anime.studio.name
end