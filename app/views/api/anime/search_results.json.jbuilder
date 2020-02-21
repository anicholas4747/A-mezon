json.anime do
    json.array! @results do |show|
        json.extract! show, :title, :genre, :release_year, :price
        json.rating show.ave_rating
        json.titleJP show.title_jp
        json.imageURL show.image_url
        json.studio show.studio.name
    end
end