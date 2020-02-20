class AddQtyToPurchases < ActiveRecord::Migration[5.2]
  def change
    add_column :purchases, :quantity, :integer
    add_column :anime, :ave_rating, :float
  end
end
