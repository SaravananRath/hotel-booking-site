class FacilityTypology < ApplicationRecord
	has_many :facilities, dependent: :destroy
	
	validates :code, presence: true
end
