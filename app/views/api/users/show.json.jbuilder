bottles = []
distilleries = []
regions = []

json.user do 
  json.partial! 'api/users/user', user: @user
end

json.ratings do
  @user.ratings.each do |rating|
    json.set! rating.id do
      json.partial! 'api/ratings/rating', rating: rating
      bottles.push(rating.bottle)
    end
  end
end

@user.bottles.each do |bottle|
  bottles.push(bottle)
end

json.bottles do
  bottles.each do |bottle|
    json.set! bottle.id do
      json.partial! 'api/bottles/bottle', bottle: bottle
      distilleries.push(bottle.distillery)
    end
  end
end

json.distilleries do
  distilleries.each do |distillery|
    json.set! distillery.id do
      json.partial! 'api/distilleries/distillery', distillery: distillery
      regions.push(distillery.region)
    end
  end
end

json.regions do
  regions.each do |region|
    json.set! region.id do
      json.partial! 'api/regions/region', region: region
    end
  end
end