class CreateRegions < ActiveRecord::Migration[5.2]
  def change
    create_table :regions do |t|
      t.string :name, null: false
      t.timestamps
    end
    add_index :regions, :name, unique: true
  end
end
