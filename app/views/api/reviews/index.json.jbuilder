json.array! @reviews do |r|
    json.set! r.id do
        json.extract! r, :id, :title, :body, :rating, r.author.username
    end
end