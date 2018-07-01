class HotelBedsCreateResource
	def self.create_country(country)
		PutsText.creating_text("Country")
		c_country = {}
		c_country[:code] = country["code"] unless country["code"].nil?
		c_country[:iso_code] = country["isoCode"] unless country["isoCode"].nil?

		Country.create!(c_country)
	end

	def self.create_city(city_name)
		PutsText.creating_text("City")
		City.create!(name: city_name)
	end

	def self.create_destination(destination)
		PutsText.creating_text("Destination")
		country = HotelBedsSearchResource.find_country(destination["countryCode"])
		c_destination = {}
		c_destination[:code] = destination["code"]
		c_destination[:name] = destination["name"]["content"] unless destination["name"].nil?
		c_destination[:country] = country

		created_destination = Destination.create!(c_destination)
		self.create_destination_zones(created_destination, destination["zones"])
		self.create_group_zones(created_destination, destination["groupZones"])
	end

	def self.create_destination_zones(destination, zones)
		zones.each do |zone|
			PutsText.creating_text("Zone")
			created_zone = destination.zones.create!(code: zone["zoneCode"],
																							name: zone["name"],
																							description: zone["description"]["content"])
		end
	end

	def self.create_group_zones(destination, group_zones)
		group_zones.each do |group_zone|
			PutsText.creating_text("Group Zone")
			zone = HotelBedsSearchResource.find_zone(group_zone["zones"].first)
			GroupZone.create!(code: group_zone["groupZoneCode"],
												name: group_zone["name"]["content"],
												zone: zone,
												destination: destination)
		end
	end

	def self.create_language_code(lan_code)
		PutsText.creating_text("Language Code")
		LanguageCode.create!(code: lan_code)
	end

	def self.create_language(language)
		PutsText.creating_text("Language")
		c_language = {}
		c_language[:code] = language["code"]
		c_language[:description] = language["description"]["content"]
		c_language[:name] = language["name"] unless language["name"].nil?

		language_code = HotelBedsSearchResource.find_language_code(language["description"]["languageCode"])
		c_language[:language_code] = language_code

		Language.create!(c_language)
	end

	def self.create_accommodation(accommodation)
		PutsText.creating_text("Accommodation")
		language_code = HotelBedsSearchResource.find_language_code(accommodation["typeMultiDescription"]["languageCode"])
		Accommodation.create!(code: accommodation["code"],
													type_multi_description: accommodation["typeMultiDescription"]["content"],
													type_description: accommodation["typeDescription"],
													language_code: language_code)
	end

	def self.create_board(board)
		PutsText.creating_text("Board")
		language_code = HotelBedsSearchResource.find_language_code(board["description"]["languageCode"])
		Board.create!(code: board["code"],
									description: board["description"]["content"],
									multi_lingual_code: board["multiLingualCode"],
									language_code: language_code)
	end

	def self.create_category(category)
		PutsText.creating_text("Category")
		language_code = HotelBedsSearchResource.find_language_code(category["description"]["languageCode"])
		accommodation = HotelBedsSearchResource.find_accommodation(category["accommodationType"])
		Category.create!(code: category["code"],
										simple_code: category["simpleCode"],
										group: category["group"],
										description: category["description"]["content"],
										accommodation: accommodation,
										language_code: language_code)
	end

	def self.create_group_category(group_category)
		PutsText.creating_text("Group Category")
		language_code = HotelBedsSearchResource.find_language_code(group_category["description"]["languageCode"])
		GroupCategory.create!(code: group_category["code"],
													order: group_category["order"],
													name: group_category["name"]["content"],
													description: group_category["description"]["content"],
													language_code: language_code)
	end

	def self.create_chain(chain)
		PutsText.creating_text("Chain")
		language_code = HotelBedsSearchResource.find_language_code(chain["description"]["languageCode"]) unless chain["description"].nil?
		c_chain = {}
		c_chain["code"] = chain["code"] unless chain["code"].nil?
		c_chain["description"] = chain["description"]["content"] unless chain["description"].nil?
		c_chain["language_code"] = language_code unless language_code.nil?

		Chain.create!(c_chain)
	end

	def self.create_currency(currency)
		PutsText.creating_text("Currency")
		language_code = HotelBedsSearchResource.find_language_code(currency["description"]["languageCode"])
		Currency.create!(code: currency["code"],
										description: currency["description"]["content"],
										currency_type: currency["currencyType"],
										language_code: language_code)
	end

	def self.create_facility_group(facility_group)
		PutsText.creating_text("Facility Group")
		language_code = HotelBedsSearchResource.find_language_code(facility_group["description"]["languageCode"])
		FacilityGroup.create!(code: facility_group["code"],
													description: facility_group["description"]["content"],
													language_code: language_code)
	end

	def self.create_facility_typology(facility_typology)
		PutsText.creating_text("Facility Typology")
		FacilityTypology.create!(code: facility_typology["code"],
														number_flag: facility_typology["numberFlag"],
														logic_flag: facility_typology["logicFlag"],
														fee_flag: facility_typology["feeFlag"],
														distance_flag: facility_typology["distanceFlag"],
														age_from_flag: facility_typology["ageFromFlag"],
														age_to_flag: facility_typology["ageToFlag"],
														date_from_flag: facility_typology["dateFromFlag"],
														date_to_flag: facility_typology["dateToFlag"],
														time_from_flag: facility_typology["timeFromFlag"],
														time_to_flag: facility_typology["timeToFlag"],
														ind_yes_or_no_flag: facility_typology["indYesOrNoFlag"],
														amount_flag: facility_typology["amountFlag"],
														currency_flag: facility_typology["currencyFlag"],
														app_type_flag: facility_typology["appTypeFlag"],
														text_flag: facility_typology["textFlag"])
	end

	def self.create_facility(facility)
		PutsText.creating_text("Facility")
		language_code = HotelBedsSearchResource.find_language_code(facility["description"]["languageCode"])
		facility_group = HotelBedsSearchResource.find_facility_group(facility["facilityGroupCode"])
		facility_typology = HotelBedsSearchResource.find_facility_typology(facility["facilityTypologyCode"])
		Facility.create!(code: facility["code"],
										description: facility["description"]["content"],
										facility_group: facility_group,
										facility_typology: facility_typology,
										language_code: language_code)
	end

	def self.create_segment(segment)
		PutsText.creating_text("Segment")
		language_code = HotelBedsSearchResource.find_language_code(segment["description"]["languageCode"])
		Segment.create!(code: segment["code"],
										description: segment["description"]["content"],
										language_code: language_code)
	end

	def self.create_terminal(terminal)
		PutsText.creating_text("Terminal")
		language_code = HotelBedsSearchResource.find_language_code(terminal["description"]["languageCode"])
		country = HotelBedsSearchResource.find_country(terminal["country"])
		Terminal.create!(code: terminal["code"],
										terminal_type: terminal["type"],
										name: terminal["name"]["content"],
										description: terminal["description"]["content"],
										country: country,
										language_code: language_code)
	end

	def self.create_image_type(image_type)
		PutsText.creating_text("Image Type")
		language_code = HotelBedsSearchResource.find_language_code(image_type["description"]["languageCode"])
		ImageType.create!(code: image_type["code"],
											description: image_type["description"]["content"],
											language_code: language_code)
	end

	def self.create_wildcard(wildcard)
		PutsText.creating_text("Wildcard")
		Wildcard.create!(room_type: wildcard["roomType"],
										room_code: wildcard["roomCode"],
										characteristic_code: wildcard["characteristicCode"],
										hotel_room_description: wildcard["hotelRoomDescription"]["content"])
	end

	def self.create_room(room)
		PutsText.creating_text("Room")
		unless room["description"]["languageCode"].nil?
			language_code = HotelBedsSearchResource.find_language_code(room["description"]["languageCode"])
		else
			language_code = HotelBedsSearchResource.find_language_code(room["characteristicDescription"]["languageCode"])
		end
		
		Room.create!(code: room["code"],
								type_code: room["type"],
								characteristic: room["characteristic"],
								min_pax: room["minPax"],
								max_pax: room["maxPax"],
								max_adults: room["maxAdults"],
								min_adults: room["minAdults"],
								max_children: room["maxChildren"],
								description: room["description"],
								type_description: room["typeDescription"]["content"],
								characteristic_description: room["characteristicDescription"]["content"],
								language_code: language_code)
	end

	def self.create_stay(stay)
		PutsText.creating_text("Stay")
		Stay.create!(stay_type: stay["stayType"],
								order: stay["order"],
								description: stay["description"])
	end

	def self.create_interest_point(interest_point)
		PutsText.creating_text("Interest Point")
		facility = HotelBedsSearchResource.find_facility(interest_point["facilityCode"])
		InterestPoint.create!(order: interest_point["order"],
											poi_name: interest_point["poiName"],
											distance: interest_point["distance"],
											facility: facility)
	end

	def self.create_hotel_dumps(hotel_dump)
		PutsText.creating_text("Hotel Dump")
		HotelDump.create!(code: hotel_dump["code"], data: hotel_dump)
	end
end
