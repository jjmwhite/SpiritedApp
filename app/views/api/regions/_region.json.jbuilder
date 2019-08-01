json.id region.id
json.name region.name
json.distilleries do 
  json.array! region.distilleries, :id
end
