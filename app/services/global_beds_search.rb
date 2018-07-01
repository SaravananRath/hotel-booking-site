class GlobalBedsSearch
	def self.search_for_availability(options)
		if options[:availability_for].eql?("Destination")
			self.availability_using_destination_codes(options)
		elsif options[:availability_for].eql?("Hotels Code")
			self.availability_using_hotel_codes(options)
		end
	end

	def self.availability_using_hotel_codes(options)
		hotels = Hotels.check_for_availability(options)

		if hotels[:error].nil?
			options[:resultcount] = hotels['hotels']['total']
			available_hotels = hotels['hotels']['hotels']
			created_search_cache = GlobalBedsCreateResource.create_search_cache(options, available_hotels)

			{ search_cache: created_search_cache[:search_cache], search_results: created_search_cache[:search_result_cache] }
		else
			HotelBedsSupplements.render_error(hotels[:error])
	end
	end

	def self.availability_using_destination_codes(options)
		destination = Destination.find_by_code(options[:destination][:code])

		hotelbeds_options = { include: [:country, :city, :destination, :zone, :category, :chain, :accommodation, :hotel_rooms, :images] }
		adonis_options = { methods: [:hash_serializable] }

		hotels_in_adonis = Adoni.where(city: destination[:name], hotelbeds: nil)
		hotels_in_hotelbeds = destination.hotels.includes(:country, :city, :destination, :zone, :category, :group_category, :chain, :accommodation, :hotel_rooms, :images)

		hotels = hotels_in_hotelbeds.as_json(hotelbeds_options) + hotels_in_adonis.as_json(adonis_options)

		{ search_cache: { search_cache: options[:destination][:code] }, search_results: hotels }
	end

	def self.search_with_pagination(options)
		if options[:availability_for].eql?("Destination")
			self.pagination_for_destination_code(options)
		elsif options[:availability_for].eql?("Hotels Code")
			self.pagination_for_hotel_code(options)
		end
	end


	def self.pagination_for_hotel_code(options)
		PutsText.fetch_search_cache(options[:searchKey], options[:from], options[:to])
		from = options[:from]
		to = options[:to]
		search_results = Gbsearchresult.where(searchkey: options[:searchKey])
		search_results_with_pagination = search_results[from..to]
		search_results_with_hotels = self.get_hotel_details(search_results_with_pagination)

		{ searched_based_on: "Hotel Code", total: search_results.count, from: options[:from], to: options[:to], search_results: search_results_with_hotels }
	end

	def self.pagination_for_destination_code(options)
		hotels = options[:hotels]
		search_results_with_hotels = hotels[options[:from]..options[:to]]

		{ searched_based_on: "Destination Code", total: hotels.count, from: options[:from], to: options[:to], search_results: search_results_with_hotels }
	end

	def self.get_hotel_details(search_results)
		results = []
		search_results.each do |seach_result|
			hotel_details = HotelsSearch.seach_based_on_hotel_code(seach_result[:hotel_dump]["code"])
			results << seach_result.as_json.merge!(hotel_details: hotel_details)
		end
		results
	end
end
