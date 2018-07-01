class HotelTerminal < ApplicationRecord
  belongs_to :terminal
  belongs_to :hotel
end
