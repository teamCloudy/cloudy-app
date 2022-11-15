class CreateUserCities < ActiveRecord::Migration[7.0]
  def change
    create_table :user_cities do |t|
      t.integer :user_id
      t.integer :weather_id
      t.string :city_name
      t.string :country_name
      t.text :notes

      t.timestamps
    end
  end
end
