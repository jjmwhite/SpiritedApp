class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :username, :email
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
  end
end
