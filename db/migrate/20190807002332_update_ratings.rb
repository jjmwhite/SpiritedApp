class UpdateRatings < ActiveRecord::Migration[5.2]
  def change
    add_column :ratings, :date, :string
  end
end
