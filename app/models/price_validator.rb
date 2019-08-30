class PriceValidator < ActiveModel::Validator 

  def validate(bottle)
    unless bottle.price != nil && bottle.price > 0.0
      bottle.errors[:base] << 'Please enter a valid price'
    end
  end

end