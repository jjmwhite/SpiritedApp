bottles = []
distilleries = []

json.user do 
  json.partial! 'api/users/user', user: @user
end

json.ratings do
  @user.ratings.each do |rating|
    json.set! rating.id do
      json.partial! 'api/ratings/rating', rating: rating
    end
  end
end

bottles.concat(@bottles || [])

json.bottles do
  bottles.each do |bottle|
    json.set! bottle.id do
      json.extract! bottle, :id, :name, :description, :distillery_id, :age, :release_year, :price, :user_id, :photo
      json.photoUrl url_for(bottle.photo)
      distilleries.push(bottle.distillery)
    end
  end
end

json.distilleries do
  distilleries.each do |distillery|
    json.set! distillery.id do
      json.extract! distillery, :id, :name, :region_id, :description
    end
  end
end

json.regions do
  @user.regions.each do |region|
    json.set! region.id do
      json.extract! region, :id, :name
    end
  end
end