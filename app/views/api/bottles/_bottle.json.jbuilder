json.id bottle.id
json.name bottle.name
json.description bottle.description
json.distillery_id bottle.distillery_id
json.age bottle.age 
json.release_year bottle.release_year
json.price sprintf("%.2f", bottle.price)
json.user_id bottle.user_id
json.photoUrl url_for(bottle.photo)
