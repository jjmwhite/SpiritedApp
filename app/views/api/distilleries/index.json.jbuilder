json.distilleries @distilleries.each do |dist|
  json.id dist.id
  json.name dist.name
  json.description dist.description
  json.region_id dist.region_id
  if dist.photo.attached?
    json.photoUrl url_for(dist.photo)
  end
end

json.regions @distilleries.each do |distillery|
  json.id distillery.region.id 
  json.name distillery.region.name
end