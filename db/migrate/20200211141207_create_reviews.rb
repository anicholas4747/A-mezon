class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating,  null: false
      t.integer :author_id,  null: false
      t.integer :anime_id,  null: false
      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :anime_id
    
    create_table :anime do |t|
        t.string :title, null: false
        t.text :description
        t.string :genre
        t.integer :release_year, null: false
        t.float  :price, null: false
        t.integer :studio_id, null: false
    end
    add_index :anime, :studio_id

    create_table :studios do |t|
        t.string :name, null: false
        t.text :description
        t.string :site_url
    end
  end
end
