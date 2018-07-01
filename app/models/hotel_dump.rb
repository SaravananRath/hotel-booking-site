class HotelDump < ApplicationRecord
	serialize :data, JSON

	validates :code, :data, presence: true

	def data
		self[:data].to_json
	end
end
