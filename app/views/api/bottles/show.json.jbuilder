json.bottle do
  json.partial! 'api/bottles/bottle', bottle: @bottle
end

json.distillery do
  json.partial! 'api/distilleries/distillery', distillery: @bottle.distillery
end