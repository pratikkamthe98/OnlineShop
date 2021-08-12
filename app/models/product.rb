class Product < ApplicationRecord
  validates :name, presence: true
  validates :brand, presence: true
  validates :price, presence: true
  validates :img, presence: true
end
