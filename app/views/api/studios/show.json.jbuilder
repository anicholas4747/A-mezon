json.extract! @studio, :id, :name, :description,  :site_url
json.anime @studio.produced_anime do |anime|
    json.extract! anime, :id, :title, :release_year
end