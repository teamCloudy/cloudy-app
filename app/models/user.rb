class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :user_cities
  has_many :weathers, :through => :user_cities
end
