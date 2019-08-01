@bottles.each do |bottle|
  json.set! bottle.id do
    json.extract! bottle, :id, :name, :description, :distillery_id, :age, :release_year, :price
    json.photoUrl url_for(distillery.photo)
  end
end