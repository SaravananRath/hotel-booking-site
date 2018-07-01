class Gbsearchcache < ApplicationRecord
	has_many :gbsearchresults

	before_create :update_search_key

	def update_search_key
		self.searchkey = self.query.to_s + Time.now.to_i.to_s
	end
end
