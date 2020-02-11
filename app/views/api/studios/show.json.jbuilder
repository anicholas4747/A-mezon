json.set! @studio.id do
    json.extract! @studio, :name, :description,  :site_url
    json.array! @studio.produced_anime do |anime|
        json.set! anime.id do
            json.extract! anime, :title, :release_year
        end
    end
end