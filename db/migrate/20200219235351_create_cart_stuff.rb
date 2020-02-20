class CreateCartStuff < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :user_id, null: false
    end
    add_index :carts, :user_id, unique: true
    create_table :purchases do |t|
      t.integer :anime_id, null: false
      t.integer :cart_id, null: false
    end
  end
end
