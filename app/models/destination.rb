class Destination < ApplicationRecord
  belongs_to :country

  has_many :zones, dependent: :destroy
  has_many :hotels, dependent: :destroy

  validates :code, presence: true
end