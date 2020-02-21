class AddColsToAnime < ActiveRecord::Migration[5.2]
  def change
    add_column :anime, :title_jp, :string
    add_column :anime, :image_url, :text
    add_column :anime, :rating, :float
  end
end
