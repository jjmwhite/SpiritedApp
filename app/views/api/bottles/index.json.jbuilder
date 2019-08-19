# ratings = []
# Calc avg ratings

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
    json.photoUrl url_for(bottle.photo)
    
    ratings = bottle.ratings.to_a
    if ratings.length > 0 
      sum = 0
      bottle.ratings.each do |entry|
        sum += entry.rating
      end
      avg_rating = sum / bottle.ratings.length
    else
      avg_rating = 0
    end
    json.avg_rating avg_rating

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

# json.users do 
#   users.each do |user|
#     json.set! user.id do
#       json.partial! '/api/users/user', user: user
#     end
#   end
# end