class DeleteSecondRatingCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :anime, :rating
  end
end
