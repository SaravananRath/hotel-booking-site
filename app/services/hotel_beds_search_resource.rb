class HotelBedsSearchResource
	def self.find_country(c_code)
		country = Country.find_by_code(c_code)
		if country.nil?
			country = {}
			country["code"] = c_code
			HotelBedsCreateResource.create_country(country)
		else
			country
		end
	end

	def self.find_city(city_name)
		city = City.find_by_name(city_name)
		if city.nil?
			HotelBedsCreateResource.create_city(city_name)
		else
			city
		end
	end

	def self.find_destination(d_code)
		destination = Destination.find_by_code(d_code)
		if destination.nil?
			HotelBedsCreateResource.create_destination(d_code)
		else
			destination
		end
	end

	def self.find_language_code(lan_code)
		language_code = LanguageCode.find_by_code(lan_code)
		if language_code.nil?
			HotelBedsCreateResource.create_language_code(lan_code)
		else
			language_code
		end
	end

	def self.find_accommodation(acc_code)
		accommodation = Accommodation.find_by_code(acc_code)
		if accommodation.nil?
			HotelBedsCreateResource.create_accommodation(acc_code)
		else
			accommodation
		end
	end

	def self.find_facility_group(fg_code)
		facility_group = FacilityGroup.find_by_code(fg_code)
		if facility_group.nil?
			HotelBedsCreateResource.create_facility_group(fg_code)
		else
			facility_group
		end
	end

	def self.find_facility_typology(ft_code)
		facility_typology = FacilityTypology.find_by_code(ft_code)
		if facility_typology.nil?
			HotelBedsCreateResource.create_facility_typology(ft_code)
		else
			facility_typology
		end
	end

	def self.find_facility(f_code)
		facility = Facility.find_by_code(f_code)
		if facility.nil?
			HotelBedsCreateResource.create_facility(f_code)
		else
			facility
		end
	end

	def self.find_room(room)
		room = Room.find_by_code_and_type_code(room["roomCode"], room["roomType"])
		if room.nil?
			HotelBedsCreateResource.create_room(room)
		else
			room
		end
	end

	def self.find_zone(z_code)
		zone = Zone.find_by_code(z_code)
		if zone.nil?
			HotelBedsCreateResource.create_zone(z_code)
		else
			zone
		end
	end

	def self.find_category(c_code)
		category = Category.find_by_code(c_code)
		if category.nil?
			HotelBedsCreateResource.create_category(c_code)
		else
			category
		end
	end

	def self.find_category_group(cg_code)
		category_group = GroupCategory.find_by_code(cg_code)
		if category_group.nil?
			HotelBedsCreateResource.create_group_category(cg_code)
		else
			category_group
		end
	end

	def self.find_chain(ch_code)
		chain = Chain.find_by_code(ch_code)
		if chain.nil?
			HotelBedsCreateResource.create_chain(ch_code)
		else
			chain
		end
	end

	def self.find_wildcard(wildcard)
		w_card = Wildcard.find_by_room_type_and_room_code_and_characteristic_code(wildcard["roomType"], wildcard["roomCode"], wildcard["characteristicCode"])
		if w_card.nil?
			HotelBedsCreateResource.create_wildcard(wildcard)
		else
			w_card
		end
	end

	def self.find_interest_point(interest_point)
		i_point = InterestPoint.find_by_poi_name_and_distance(interest_point["poiName"], interest_point["distance"])
		if i_point.nil?
			HotelBedsCreateResource.create_interest_point(interest_point)
		else
			i_point
		end
	end

	def self.find_board(b_code)
		board = Board.find_by_code(b_code)
		if board.nil?
			HotelBedsCreateResource.create_board(b_code)
		else
			board
		end
	end

	def self.find_segment(s_code)
		segment = Segment.find_by_code(s_code)
		if segment.nil?
			HotelBedsCreateResource.create_segment(s_code)
		else
			segment
		end
	end
end
