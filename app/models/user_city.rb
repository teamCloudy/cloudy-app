class UserCity < ApplicationRecord
    belongs_to :user
    belongs_to :weather
    validates :city_name, :country_name, :user_id, presence: true
end
