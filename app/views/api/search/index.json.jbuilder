@results.each do |result|
  json.set! result.id do
    json.extract! result, :id, :name
  end
end