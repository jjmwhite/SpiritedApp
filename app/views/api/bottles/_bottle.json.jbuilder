json.set! bottle.id do 
  json.id bottle.id
  json.name bottle.name
  json.description bottle.description
  json.distillery bottle.distillery.name 
  json.region bottle.region.name
  json.age bottle.age 
  json.release_year bottle.release_year
  json.price bottle.price
end