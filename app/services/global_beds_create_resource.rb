class GlobalBedsCreateResource
	def self.create_search_cache(search_for, search_results)
		PutsText.creating_search_cache
		search_detail = self.search_params(search_for)
		search_cache = Gbsearchcache.create!(search_detail)
		search_result_cache = self.create_search_result_dump(search_results, search_cache)

		{ search_cache: search_cache, search_result_cache: search_result_cache }
	end

	def self.create_search_result_dump(search_results, search_key)
		search_result_cache = []
		search_results.each do |search_result|
			search_result_detail = self.search_result_params(search_result, search_key)
			search_result_cache << Gbsearchresult.create!(search_result_detail)
		end
		search_result_cache
	end

	def self.search_params(search_for)
		search_detail = {}

		search_detail[:resultcount] = search_for[:resultcount]
		search_detail[:fromdate] = search_for[:stay][:checkIn]
		search_detail[:todate] = search_for[:stay][:checkOut]
		search_detail[:rooms] = search_for[:occupancies].first[:rooms]
		search_detail[:adults] = search_for[:occupancies].first[:adults]

		if !search_for[:hotels].nil?
			search_detail[:query] = search_for[:hotels][:hotel].first
			search_detail[:query_type] = "hotel"
		elsif !search_for[:destination].nil?
			search_detail[:query] = search_for[:destination][:code]
			search_detail[:query_type] = "destination"
		end

		unless search_for[:occupancies].first[:children].nil?
			search_detail[:children] = search_for[:occupancies].first[:children]
			paxes = search_for[:occupancies].first[:paxes]

			unless paxes.nil? && paxes.empty?
				paxes.each_with_index do |pax, index|
					child_key = "child#{index+1}age"
					search_detail[child_key] = pax[:age] if index+1 <= 4
				end
			end
		end

		search_detail
	end

	def self.search_result_params(search_result, search_cache)
		search_result_detail = {}
		search_result_detail[:searchkey] = search_cache.searchkey
		search_result_detail[:hotel_dump] = search_result
		search_result_detail[:bestsupplier] = "HotelBeds"
		search_result_detail[:gbsearchcache_id] = search_cache.id

		search_result_detail
	end
end