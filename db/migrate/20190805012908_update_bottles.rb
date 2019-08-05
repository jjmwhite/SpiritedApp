class UpdateBottles < ActiveRecord::Migration[5.2]
  def change
    add_column :bottles, :user_id, :integer
    add_index :bottles, :user_id
  end
end
