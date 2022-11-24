class ChangingTimeDatatype < ActiveRecord::Migration[7.0]
  def change
    change_column :weathers, :time, :string
  end
end
