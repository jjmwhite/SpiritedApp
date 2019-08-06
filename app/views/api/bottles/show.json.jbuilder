json.bottle do
  json.partial! 'api/bottles/bottle', bottle: @bottle
end

json.distillery do
  json.partial! 'api/distilleries/distillery', distillery: @bottle.distillery
end

json.region do 
  json.partial! 'api/regions/region', region: @bottle.region
end

json.ratings do
  @bottle.ratings.each do |rating|
    json.set! rating.id do
      json.partial! 'api/ratings/rating', rating: rating
    end
  end
end