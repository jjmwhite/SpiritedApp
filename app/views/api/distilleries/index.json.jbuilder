json.distilleries @distilleries.each do |dist|
  json.set! dist.id do
    json.id dist.id
    json.name dist.name
    json.description dist.description
    json.region dist.region.name
    if dist.photo.attached?
      json.photoUrl url_for(dist.photo)
    end
  end
end

json.regions @distilleries.each do |distillery|
  json.set! distillery.region.id do
    json.id distillery.region.id 
    json.name distillery.region.name
  end
end