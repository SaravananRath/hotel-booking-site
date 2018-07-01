class Stay < ApplicationRecord
	has_many :room_stays, dependent: :destroy
	
	validates :stay_type, presence: true
end
