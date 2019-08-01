json.extract! distillery, :id, :name, :region_id, :description
json.array! distillery.bottles, bottles.id 