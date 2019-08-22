users = []

json.bottle do
  json.partial! 'api/bottles/bottle', bottle: @bottle
end

json.distillery do
  json.id bottle.distillery.id 
  json.name bottle.distillery.name
  json.region_id bottle.distillery.region_id
  json.description bottle.distillery.description
  json.bottles distillery.bottle_ids
end

json.region do 
  json.partial! 'api/regions/region', region: @bottle.region
end

json.ratings do
  @bottle.ratings.each do |rating|
    json.set! rating.id do
      json.partial! 'api/ratings/rating', rating: rating
      users.push(rating.user)
    end
  end
end

json.users do 
  users.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
end