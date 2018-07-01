class Room < ApplicationRecord
  belongs_to :language_code

  has_many :room_facilities
  has_many :room_stays
  has_many :hotel_rooms, dependent: :destroy

  validates :code, presence: true
end
