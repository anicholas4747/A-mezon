json.array! @anime do |show|
    json.extract! show, :title, :genre
    json.titleJP show.title_jp
end