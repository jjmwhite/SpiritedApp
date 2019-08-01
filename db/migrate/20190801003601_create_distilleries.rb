class CreateDistilleries < ActiveRecord::Migration[5.2]
  def change
    create_table :distilleries do |t|
      t.string :name, null: false
      t.integer :region_id, null: false
      t.text :description, null: false
      t.timestamps
    end
    add_index :distilleries, :name, unique: true
    add_index :distilleries, :region_id
  end
end
