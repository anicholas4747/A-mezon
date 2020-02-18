json.extract! @result, :exists
if @result[:id] != nil
    json.extract! @result, :id, :username
end