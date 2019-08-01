class CreateBottles < ActiveRecord::Migration[5.2]
  def change
    create_table :bottles do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :distillery_id, null: false
      t.integer :age
      t.integer :release_year
      t.float :price, null:false
      t.timestamps
    end
    add_index :bottles, :name, unique: true
    add_index :bottles, :distillery_id
  end
end
