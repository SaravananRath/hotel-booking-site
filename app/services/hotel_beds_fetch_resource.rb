class HotelBedsFetchResource
	def self.fetch_all_resource
		self.fetch_countries
		self.fetch_destinations
		self.fetch_languages
		self.fetch_accommodations
		self.fetch_boards
		self.fetch_categories
		self.fetch_group_categories
		self.fetch_chains
		self.fetch_currencies
		self.fetch_facility_groups
		self.fetch_facility_typologies
		self.fetch_facilities
		self.fetch_segments
		self.fetch_terminals
		self.fetch_image_types
		self.fetch_rooms
		self.fetch_hotels
	end

	def self.fetch_hotels_from
		HotelDump.count
	end

	def self.fetch_resource(type, from, to)
		HotelBeds.fetch(type: type, from: from, to: to)
	end

	def self.fetch_countries
		countries = self.fetch_resource("countries", 1, 1000)
		countries["countries"].each do |country|
			HotelBedsCreateResource.create_country(country)
		end
	end

	def self.fetch_all_destinations
		count, total, all_destinations = 1, 1000, []
		from, to = count, total
		while count <= total
			from, to = count+1, count+1000 unless count == 1
			fetched_destinations = self.fetch_resource("destinations", from, to)
			total = fetched_destinations["total"]
			unless fetched_destinations["destinations"].nil?
				all_destinations += fetched_destinations["destinations"]
				count = fetched_destinations["to"]
			else
				PutsText.fetch_failed_text("Destinations", from, to)
			end
		end
		all_destinations
	end

	def self.fetch_destinations
		destinations = self.fetch_all_destinations
		destinations.each do |destination|
			HotelBedsCreateResource.create_destination(destination)
		end
	end

	def self.fetch_languages
		languages = self.fetch_resource("languages", 1, 1000)
		languages["languages"].each do |language|
			HotelBedsCreateResource.create_language(language)
		end
	end

	def self.fetch_accommodations
		accommodations = self.fetch_resource("accommodations", 1, 1000)
		accommodations["accommodations"].each do |accommodation|
			HotelBedsCreateResource.create_accommodation(accommodation)
		end
	end

	def self.fetch_boards
		boards = self.fetch_resource("boards", 1, 1000)
		boards["boards"].each do |board|
			HotelBedsCreateResource.create_board(board)
		end
	end

	def self.fetch_categories
		categories = self.fetch_resource("categories", 1, 1000)
		categories["categories"].each do |category|
			HotelBedsCreateResource.create_category(category)
		end
	end

	def self.fetch_group_categories
		group_categories = self.fetch_resource("groupcategories", 1, 1000)
		group_categories["groupCategories"].each do |group_category|
			HotelBedsCreateResource.create_group_category(group_category)
		end
	end

	def self.fetch_all_chains
		count, total, all_chains = 1, 1000, []
		from, to = count, total
		while count <= total
			from, to = count+1, count+1000 unless count == 1
			fetched_chains = self.fetch_resource("chains", from, to)
			total = fetched_chains["total"]
			unless fetched_chains["chains"].nil?
				all_chains += fetched_chains["chains"]
				count = fetched_chains["to"]
			else
				PutsText.fetch_failed_text("Chains", from, to)
			end
		end
		all_chains
	end

	def self.fetch_chains
		chains = self.fetch_all_chains
		chains.each do |chain|
			puts "chain: #{chain}"
			HotelBedsCreateResource.create_chain(chain)
		end
	end

	def self.fetch_currencies
		currencies = self.fetch_resource("currencies", 1, 1000)
		currencies["currencies"].each do |currency|
			HotelBedsCreateResource.create_currency(currency)
		end
	end

	def self.fetch_facility_groups
		facility_groups = self.fetch_resource("facilitygroups", 1, 1000)
		facility_groups["facilityGroups"].each do |facility_group|
			HotelBedsCreateResource.create_facility_group(facility_group)
		end
	end

	def self.fetch_facility_typologies
		facility_typologies = self.fetch_resource("facilitytypologies", 1, 1000)
		facility_typologies["facilityTypologies"].each do |facility_typology|
			HotelBedsCreateResource.create_facility_typology(facility_typology)
		end
	end

	def self.fetch_facilities
		facilities = self.fetch_resource("facilities", 1, 1000)
		facilities["facilities"].each do |facility|
			HotelBedsCreateResource.create_facility(facility)
		end
	end

	def self.fetch_segments
		segments = self.fetch_resource("segments", 1, 1000)
		segments["segments"].each do |segment|
			HotelBedsCreateResource.create_segment(segment)
		end
	end

	def self.fetch_all_terminals
		count, total, all_terminals = 1, 1000, []
		from, to = count, total
		while count <= total
			from, to = count+1, count+1000 unless count == 1
			fetched_terminals = self.fetch_resource("terminals", from, to)
			total = fetched_terminals["total"]
			unless fetched_terminals["terminals"].nil?
				all_terminals += fetched_terminals["terminals"]
				count = fetched_terminals["to"]
			else
				PutsText.fetch_failed_text("Terminals", from, to)
			end
		end
		all_terminals
	end

	def self.fetch_terminals
		terminals = self.fetch_resource("terminals", 1, 1000)
		terminals["terminals"].each do |terminal|
			HotelBedsCreateResource.create_terminal(terminal)
		end
	end

	def self.fetch_image_types
		image_types = self.fetch_resource("imagetypes", 1, 1000)
		image_types["imageTypes"].each do |image_type|
			HotelBedsCreateResource.create_image_type(image_type)
		end
	end

	def self.fetch_all_rooms
		count, total, all_rooms = 1, 1000, []
		from, to = count, total
		while count <= total
			from, to = count+1, count+1000 unless count == 1
			fetched_rooms = self.fetch_resource("rooms", from, to)
			total = fetched_rooms["total"]
			unless fetched_rooms["rooms"].nil?
				all_rooms += fetched_rooms["rooms"]
				count = fetched_rooms["to"]
			else
				PutsText.fetch_failed_text("Rooms", from, to)
			end
		end
		all_rooms
	end

	def self.fetch_rooms
		rooms = self.fetch_all_rooms
		rooms.each do |room|
			HotelBedsCreateResource.create_room(room)
		end
	end

	def self.fetch_all_hotels
		from, to = 1, 1000
		count = self.fetch_hotels_from
		total = count + 1000
		from, to = count, total if count
		all_hotels = []

		while count <= total
			from, to = count+1, count+1000 unless count == 1
			fetched_hotels = self.fetch_resource(nil, from, to)
			total = fetched_hotels["total"]
			unless fetched_hotels["hotels"].nil?
				all_hotels += fetched_hotels["hotels"]
				count = fetched_hotels["to"]
			else
				PutsText.fetch_failed_text("Hotels", from, to)
			end
			if count >= 2000
				break
			end
		end
		all_hotels
	end

	def self.fetch_hotels
		hotels = self.fetch_all_hotels
		hotels.each do |hotel|
			HotelBedsCreateResource.create_hotel_dumps(hotel)
		end
		Hotels.update_new_hotels
	end
end
