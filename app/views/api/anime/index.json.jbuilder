json.array! @anime do |show|
    json.set! show.id do
        json.extract show, :title, :price
        json.rating show.ave_rating
        json.titleJP show.title_jp
        json.imageURL show.image_url
        json.studio show.studio.name
    end
end
