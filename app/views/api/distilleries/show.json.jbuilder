json.distillery do
  json.partial! '/api/distilleries/distillery', distillery: @distillery 
end

json.bottles do
  @distillery.bottles.each do |bottle|
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
end

json.region do
  json.set! @distillery.region.id do
    json.id @distillery.region.id
    json.name @distillery.region.name
  end
end
