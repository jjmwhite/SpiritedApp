json.bottle do
  json.partial! 'api/bottles/bottle', bottle: @bottle
end

json.distillery do
  json.partial! 'api/distilleries/distillery', distillery: @bottle.distillery
end

json.region do 
  json.partial! 'api/regions/region', region: @bottle.region
end

# need to pull in ratings