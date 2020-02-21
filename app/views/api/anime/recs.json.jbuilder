json.results do
    json.array! @recs do |show|
        json.extract! show, :title, :release_year, :price
        json.rating show.ave_rating
        json.titleJP show.title_jp
        json.imageURL show.image_url
    end
end