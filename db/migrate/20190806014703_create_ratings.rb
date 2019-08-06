class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :bottle_id, null: false
      t.integer :rating, null: false
      t.text :review, null: false
      t.timestamps
    end
    add_index :ratings, :user_id
    add_index :ratings, :bottle_id
    add_index :ratings, :rating
  end
end
