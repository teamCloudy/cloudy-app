class Weather < ApplicationRecord
    has_many :cities
    has_many :users, :through => :user_cities
end
