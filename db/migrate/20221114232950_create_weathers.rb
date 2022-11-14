class CreateWeathers < ActiveRecord::Migration[7.0]
  def change
    create_table :weathers do |t|
      t.integer :temperature
      t.time :time
      t.date :date
      t.string :current_weather
      t.integer :uv_index
      t.integer :wind_speed
      t.integer :humidity
      t.string :description

      t.timestamps
    end
  end
end
