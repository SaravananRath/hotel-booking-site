class Wildcard < ApplicationRecord
	has_many :hotel_wildcards, dependent: :destroy
	
	validates :room_type, :room_code, :characteristic_code, presence: true
end
