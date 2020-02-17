json.anime do
    json.array! @results do |anime|
        json.extract! anime, :title, :genre, :release_year, :price
    end
end