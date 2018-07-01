class PutsText
	def self.type_text(type, from, to)
		puts "Fetching HotelBeds Type: #{type} from #{from} to #{to}..."
	end

	def self.location_text(location, from, to)
		puts "Fetching HotelBeds Location: #{location} from #{from} to #{to}..."
	end

	def self.hotel_code_text(hotel_code)
		puts "Fetching Hotels Details of Code: #{hotel_code}..."
	end

	def self.hotels_text(from, to)
		puts "Fetching Hotels from #{from} to #{to}..."
	end

	def self.fetch_failed_text(type, from, to)
		puts "Failed fetching #{type} from #{from} to #{to}..."
	end

	def self.creating_text(type)
		puts "Creating #{type}.."
	end

	def self.created_text(type)
		puts "#{type} Created Successfully!"
	end

	def self.availability_text(availability_for)
		puts "Checking Availability based on #{availability_for}..."
	end

	def self.checking_rates_text
		puts "Checking Rates..."
	end

	def self.bookings_text(from, to)
		puts "Fetching Bookings from #{from} to #{to}..."
	end

	def self.booking_details_text(reference)
		puts "Fetching Booking Details for #{reference}..."
	end

	def self.create_hotel_booking_text
		puts "Creating Hotel Booking..."
	end

	def self.delete_booking_text(reference)
		puts "Deleting Booking reference of #{reference}..."
	end

	def self.edit_booking_text(reference)
		puts "Editing Booking of reference #{reference}..."
	end

	def self.availability_for(options)
		unless options[:hotels].nil?
			return "Hotels Code"
		end

		unless options[:destination].nil?
			return "Destination"
		end

		unless options[:geolocation].nil?
			return "GeoLocation"
		end
	end

	def self.creating_search_cache
		puts "Creating search cache..."
	end

	def self.fetch_search_cache(search_key, from, to)
		puts "Fetching search cache from #{from} to #{to} for #{search_key}..."
	end
end
