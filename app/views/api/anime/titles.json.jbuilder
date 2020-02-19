json.array! @anime do |show|
    json.extract! show, :title, :genre
end