json.extract! @studio, :id, :name, :description,  :site_url
json.anime @studio.produced_anime do |anime|
    json.extract! anime, :id, :title, :release_year
    json.imageURL anime.image_url
    json.rating anime.ave_rating
    json.titleJP anime.title_jp
end