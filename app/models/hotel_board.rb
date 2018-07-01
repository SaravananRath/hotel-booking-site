class HotelBoard < ApplicationRecord
  belongs_to :board
  belongs_to :hotel
end
