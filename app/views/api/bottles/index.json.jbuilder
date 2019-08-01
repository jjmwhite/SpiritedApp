@bottles.each do |bottle|
  json.set! bottle.id do
    json.extract! :id, :name, :description, :age, :release_year, :distillery_id
  end
end