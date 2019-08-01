json.id distillery.id 
json.name distillery.name
json.region_id distillery.region.id
json.descripion distillery.description
json.bottles do
  json.array! distillery.bottles, :id
end