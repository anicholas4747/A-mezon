json.array! @anime do |show|
    json.set! show.id do
        json.extract show, :title, :rating, :price
        json.studio show.studio.name
    end
end
