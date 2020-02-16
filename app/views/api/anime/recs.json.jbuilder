json.results do
    json.array! @recs do |rec|
        json.extract! rec, :title, :release_year, :price
    end
end