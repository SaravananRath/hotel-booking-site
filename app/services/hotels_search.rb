class HotelsSearch
	def self.search_hotels_and_destinations(search_for)
		destinations = self.search_based_on_city_on_hb(search_for)
		hotels_in_hb_with_name = self.search_based_on_hotel_name_on_hb(search_for)
		hotels_in_adonis = self.search_based_on_hotel_name_or_city_on_ad(search_for)
		hotels = hotels_in_hb_with_name + hotels_in_adonis
		{ destinations: destinations, hotels: hotels.uniq! {|h| h[:name] } }
	end

	def self.search_based_on_city_on_hb(search_for)
		zone = []
		destination = Destination.where("name LIKE '%#{search_for}%'").select(:id,:name)
		if destination.empty?
			zone = Zone.where("name LIKE '%#{search_for}%'").select(:id,:name)
		end
		destination+zone
	end

	def self.search_based_on_hotel_name_on_hb(search_for)
		hotels = Hotel.select("id,name,code").where("name LIKE '%#{search_for}%'").limit(100)
		hotels
	end

	def self.search_based_on_hotel_name_or_city_on_ad(search_for)
		hotels = Adoni.select("id,name,hotelcode").where("name LIKE '%#{search_for}%' OR city LIKE '%#{search_for}%'").limit(100)
		hotels
	end

	def self.list_of_destinations(hotels)
		options = { include: [:destination] }
		hotels = hotels.as_json(options)

		hotels.map { |hotel| hotel["destination"] }.uniq!
	end

	def self.seach_based_on_hotel_code(code)
		options = { include: [:country, :city, :destination, :zone, :category, :chain, :accommodation, :hotel_rooms, :images] }
		hotel = Hotel.includes(:country, :city, :destination, :zone, :category, :group_category, :chain, :accommodation, :hotel_rooms, :images).find_by_code(code)

		hotel.as_json(options)
	end
end
