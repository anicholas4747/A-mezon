json.array! @studios do |s|
    json.extract! s, :id, :name
end