ratings = []

json.bottles @bottles.each do |bottle|
  json.set! bottle.id do
    json.id bottle.id
    json.name bottle.name
    json.description bottle.description
    json.distillery_id bottle.distillery_id
    json.age bottle.age 
    json.release_year bottle.release_year
    json.price bottle.price
    json.user_id bottle.user_id
    if bottle.photo.attached?
      json.photoUrl url_for(bottle.photo)
    end
    ratings.concat(bottle.ratings)
  end
end

json.distilleries @bottles.each do |bottle|
  json.set! bottle.distillery.id do
    json.id bottle.distillery.id 
    json.name bottle.distillery.name
    json.description bottle.distillery.description
    json.region_id bottle.distillery.region_id
  end
end

json.regions @bottles.each do |bottle|
  json.set! bottle.region.id do
    json.id bottle.region.id 
    json.name bottle.region.name
  end
end

json.ratings do
  ratings.each do |rating|
    json.set! rating.id do
      json.partial! '/api/ratings/rating', rating: rating
    end
  end
end
