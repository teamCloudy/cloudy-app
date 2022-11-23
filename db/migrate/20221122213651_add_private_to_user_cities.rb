class AddPrivateToUserCities < ActiveRecord::Migration[7.0]
  def change
    add_column :user_cities, :private, :boolean, default: true
  end
end
