json.ratings @ratings.each do |rating|
  json.set! rating.id
    json.id rating.id
    json.user_id rating.user_id
    json.bottle_id rating.bottle_id
    json.rating rating.rating
    json.review rating.review
    json.updated_at rating.updated_at
  end
end