json.array! @cart.purchases do |item|
    json.extract! item, :quantity, :anime_id
    json.extract! item.anime, :title, :price, :release_year
    json.extract! item.anime.studio, :name
end