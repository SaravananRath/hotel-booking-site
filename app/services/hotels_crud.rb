class HotelsCRUD
	def self.find_facility_for_facility_group(facility)
		facility_group = FacilityGroup.find_by_code(facility["facilityGroupCode"])
		facility_group.facilities.find_by_code(facility["facilityCode"])
	end

	def self.hotel_data_structure(hotel_json)
		hotel_data = {}
		hotel_data["code"] = hotel_json["code"] unless hotel_json["code"].nil?
		hotel_data["name"] = hotel_json["name"]["content"] unless hotel_json["name"].nil?
		hotel_data["description"] = hotel_json["description"]["content"] unless hotel_json["description"].nil?
		hotel_data["longitude"] = hotel_json["coordinates"]["longitude"] unless hotel_json["coordinates"].nil?
		hotel_data["latitude"] = hotel_json["coordinates"]["latitude"] unless hotel_json["coordinates"].nil?
		hotel_data["address"] = hotel_json["address"]["content"] unless hotel_json["address"].nil?
		hotel_data["postal_code"] = hotel_json["postalCode"] unless hotel_json["postalCode"].nil?
		hotel_data["email"] = hotel_json["email"] unless hotel_json["email"].nil?
		hotel_data["license"] = hotel_json["license"] unless hotel_json["license"].nil?
		hotel_data["website"] = hotel_json["web"] unless hotel_json["web"].nil?
		hotel_data["s2c"] = hotel_json["S2C"] unless hotel_json["S2C"].nil?

		hotel_data
	end

	def self.create_hotel(hotel_json)
		country = HotelBedsSearchResource.find_country(hotel_json["countryCode"]) unless hotel_json["countryCode"].nil?
		city = HotelBedsSearchResource.find_city(hotel_json["city"]["content"]) unless hotel_json["city"].nil?
		destination = HotelBedsSearchResource.find_destination(hotel_json["destinationCode"]) unless hotel_json["destinationCode"].nil?
		zone = HotelBedsSearchResource.find_zone(hotel_json["zoneCode"]) unless hotel_json["zoneCode"].nil?
		category = HotelBedsSearchResource.find_category(hotel_json["categoryCode"]) unless hotel_json["categoryCode"].nil?
		group_category = HotelBedsSearchResource.find_category_group(hotel_json["categoryGroupCode"]) unless hotel_json["categoryGroupCode"].nil?
		chain = HotelBedsSearchResource.find_chain(hotel_json["chainCode"]) unless hotel_json["chainCode"].nil?
		accommodation = HotelBedsSearchResource.find_accommodation(hotel_json["accommodationTypeCode"]) unless hotel_json["accommodationTypeCode"].nil?
		
		hotel_data = self.hotel_data_structure(hotel_json)
		hotel_data["country"] = country
		hotel_data["city"] = city
		hotel_data["destination"] = destination
		hotel_data["zone"] = zone
		hotel_data["category"] = category
		hotel_data["group_category"] = group_category
		hotel_data["chain"] = chain
		hotel_data["accommodation"] = accommodation

		PutsText.creating_text("Hotel")
		hotel = Hotel.create!(hotel_data)

		self.create_phones(hotel, hotel_json["phones"]) unless hotel_json["phones"].nil?
		self.create_hotel_rooms(hotel, hotel_json["rooms"]) unless hotel_json["rooms"].nil?
		self.create_hotel_facilities(hotel, hotel_json["facilities"]) unless hotel_json["facilities"].nil?
		self.create_hotel_terminals(hotel, hotel_json["terminals"]) unless hotel_json["terminals"].nil?
		self.create_hotel_interest_points(hotel, hotel_json["interestPoints"]) unless hotel_json["interestPoints"].nil?
		self.create_hotel_images(hotel, hotel_json["images"]) unless hotel_json["images"].nil?
		self.create_hotel_wildcards(hotel, hotel_json["wildcards"]) unless hotel_json["wildcards"].nil?
		self.create_hotel_boards(hotel, hotel_json["boardCodes"]) unless hotel_json["boardCodes"].nil?
		self.create_hotel_segments(hotel, hotel_json["segmentCodes"]) unless hotel_json["segmentCodes"].nil?

		PutsText.created_text("Hotel")
	end

	def self.create_phones(hotel, hotel_phones)
		hotel_phones.each do |phone|
			hotel.phones.create!(number: phone["phoneNumber"], phone_type: phone["phoneType"])
		end
	end

	def self.create_hotel_facilities(hotel, facilities)
		facilities.each do |facility|
			hotel_facility = self.find_facility_for_facility_group(facility)
			hotel.hotel_facilities.create!(hotel: hotel, facility: hotel_facility, order: facility["order"], number: facility["number"])
		end
	end

	def self.create_hotel_terminals(hotel, terminals)
		terminals.each do |terminal|
			hotel_terminal = Terminal.find_by_code(terminal["terminalCode"])
			hotel.hotel_terminals.create!(hotel: hotel, terminal: hotel_terminal, distance: terminal["distance"])
		end
	end

	def self.create_hotel_interest_points(hotel, interest_points)
		interest_points.each do |interest_point|
			hotel_interest_point = HotelBedsSearchResource.find_interest_point(interest_point)
			hotel.hotel_interest_points.create!(hotel: hotel, interest_point: hotel_interest_point)
		end
	end

	def self.create_hotel_images(hotel, images)
		images.each do |image|
			image_type = ImageType.find_by_code(image["imageTypeCode"])
			hotel.images.create!(image_type: image_type, path: image["path"], order: image["order"])
		end
	end

	def self.create_hotel_wildcards(hotel, wildcards)
		wildcards.each do |wildcard|
			wildcard = HotelBedsSearchResource.find_wildcard(wildcard)
			hotel.hotel_wildcards.create!(hotel: hotel, wildcard: wildcard)
		end
	end

	def self.create_hotel_rooms(hotel, hotel_rooms)
		hotel_rooms.each do |hotel_room|
			room = HotelBedsSearchResource.find_room(hotel_room)
			hotel.hotel_rooms.create!(hotel: hotel, room: room)
			self.create_room_facilities(room, hotel_room["roomFacilities"]) unless hotel_room["roomFacilities"].nil?
			self.create_room_stays(room, hotel_room["roomStays"]) unless hotel_room["roomStays"].nil?
		end
	end

	def self.create_hotel_boards(hotel, hotel_boards)
		hotel_boards.each do |hotel_board|
			board = HotelBedsSearchResource.find_board(hotel_board)
			hotel.hotel_boards.create!(hotel: hotel, board: board)
		end
	end

	def self.create_hotel_segments(hotel, hotel_segments)
		hotel_segments.each do |hotel_segment|
			segment = HotelBedsSearchResource.find_segment(hotel_segment)
			hotel.hotel_segments.create!(hotel: hotel, segment: segment)
		end
	end

	def self.create_room_facilities(room, room_facilities)
		room_facilities.each do |room_facility|
			facility = HotelBedsSearchResource.find_facility(room_facility["facilityCode"])
			RoomFacility.create!(room: room, facility: facility)
		end
	end

	def self.create_room_stays(room, room_stays)
		room_stays.each do |room_stay|
			stay = HotelBedsCreateResource.create_stay(room_stay)
			RoomStay.create!(room: room, stay: stay)
		end
	end
end
