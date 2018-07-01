class Gbsearchresult < ApplicationRecord
	serialize :hotel_dump, JSON

	belongs_to :gbsearchcache

	def hotel_dump
		self[:hotel_dump].to_json
	end
end
