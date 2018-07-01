class Hotels
	def self.check_for_new_hotels
		all_hotel = HotelBedsFetchResource.fetch_all_hotels
		new_hotels = self.find_new_hotels(all_hotel)
		self.create_new_hotels_dump(new_hotels) unless new_hotels.empty?
	end

	def self.find_new_hotels(all_hotels)
		old_hotels = HotelDump.pluck(:data)
		all_hotels - old_hotels
	end

	def self.create_new_hotels_dump(hotels)
		hotels.each do |hotel|
			HotelBedsCreateResource.create_hotel_dumps(hotel)
		end
	end

	def self.update_hotels
		puts "Updating Hotels..."
		hotel_dumps = HotelDump.pluck(:data)
		hotel_dumps.each do |hotel_dump|
			HotelsCRUD.create_hotel(hotel_dump)
		end
	end

	def self.find_new_hotels_code
		hotel_dump_codes = HotelDump.pluck(:code)
		hotel_codes = Hotel.pluck(:code)
		hotel_dump_codes - hotel_codes
	end

	def self.update_new_hotels
		puts "Updating New Hotels..."
		new_hotel_codes = self.find_new_hotels_code
		new_hotel_codes.each do |new_hotel_code|
			hotel = HotelDump.find_by_code(new_hotel_code)
			HotelsCRUD.create_hotel(hotel[:data])
		end
	end

	def self.check_for_availability(options = {})
		HotelBeds.fetch(options)
	end

	def self.check_for_rates(options = {})
		HotelBeds.fetch(options)
	end

	def self.find_booking_category(options)
		if options[:rooms].present? || options[:mode].present?
			"booking"
		else
			"bookings"
		end
	end

	def self.find_booking_type(options)
		if options[:reference].present? && options[:cancellationFlag].nil?
			"bookingdetails"
		elsif options[:rooms].present?
			"createbooking"
		elsif options[:cancellationFlag].present?
			"deletebooking"
		elsif options[:mode].present?
			"editbooking"
		else
			"bookings"
		end
	end

	def self.bookings(options = {})
		HotelBeds.fetch(options)
	end
end
