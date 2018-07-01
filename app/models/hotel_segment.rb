class HotelSegment < ApplicationRecord
  belongs_to :segment
  belongs_to :hotel
end
