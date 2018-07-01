class HotelBeds
	def self.setup
		HotelBedsFetchResource.fetch_all_resource
	end

	def self.signature
		# Live Key
		# api_key = 'q224updkak86gyjkpw9wkx6s'
		# secret = '7fJqXu6twE'

		# Testing Key
		api_key = '76mrnv3pwj7rxemh9pwbhxrs'
		secret = 'GmebrhfVJg'

		time = Time.now.to_i.to_s
		token = api_key+secret+time

		Digest::SHA256.hexdigest token
	end

	def self.headers(request_headers)
		signature = self.signature
		# Test
		request_headers['Api-key'] = '76mrnv3pwj7rxemh9pwbhxrs'
		
		# Live
		# request_headers['Api-key'] = 'q224updkak86gyjkpw9wkx6s'
		request_headers['X-Signature'] = signature
		request_headers['Accept'] = 'application/json'
		request_headers['Cache-Control'] = 'no-cache'
		request_headers['Content-Type'] = 'application/json'
		request_headers['timeout'] = 1500

		request_headers
	end

	def self.body(options)
		request_body = options.except(:controller, :action, :hotel, :type, :availability_for, :category)
		request_body.to_json
	end

	def self.booking_request_url(options)
		end_point = "https://api.test.hotelbeds.com/hotel-api/1.0/"
		start_end = "&start=#{options[:start]}&end=#{options[:end]}" unless options[:start].nil?
		filter_type = "&filterType=#{options[:filterType]}" unless options[:filterType].nil?
		status = "&status=#{options[:status]}" unless options[:status].nil?
		from_to = "&from=#{options[:from]}&to=#{options[:to]}" unless options[:from].nil?

		availability_condition = "availability".eql?(options[:type])
		checkrates_condition = "checkrates".eql?(options[:type])
		bookings_condition = "bookings".eql?(options[:type])
		bookingdetails_condition = "bookingdetails".eql?(options[:type])
		createbooking_condition = "createbooking".eql?(options[:type])
		deletebooking_condition = "deletebooking".eql?(options[:type])
		editbooking_condition = "editbooking".eql?(options[:type])

		if availability_condition
			PutsText.availability_text(options[:availability_for])
			"#{end_point}hotels"
		elsif checkrates_condition
			PutsText.checking_rates_text
			"#{end_point}checkrates"
		elsif bookings_condition
			PutsText.bookings_text(options[:start], options[:end])
			"#{end_point}bookings?#{start_end}#{filter_type}#{status}#{from_to}"
		elsif bookingdetails_condition
			PutsText.booking_details_text(options[:reference])
			"#{end_point}bookings/#{options[:reference]}"
		elsif createbooking_condition
			PutsText.create_hotel_booking_text
			"#{end_point}bookings"
		elsif deletebooking_condition
			PutsText.delete_booking_text(options[:reference])
			"#{end_point}bookings/#{options[:reference]}?cancellationFlag=#{options[:cancellationFlag]}&language=#{options[:language]}"
		elsif editbooking_condition
			PutsText.edit_booking_text(options[:reference])
			"#{end_point}bookings/#{options[:booking][:reference]}"
		else
			puts "Falls Under No Condition!"
		end
	end

	def self.request_url(options)
		end_point = "https://api.test.hotelbeds.com/hotel-content-api/1.0/"
		language_fields = "?fields=all&language=ENG&useSecondaryLanguage=#{options[:hotel_code].nil?}"
		from_to = "&from=#{options[:from]}&to=#{options[:to]}" unless options[:from].nil?

		location_condition = "countries".eql?(options[:type]) || "destinations".eql?(options[:type])
		type_condition = !options[:type].nil? && !location_condition && !availability_condition
		hotel_code_condition = !options[:hotel_code].nil?

		if type_condition
			PutsText.type_text(options[:type], options[:from], options[:to])
			"#{end_point}types/#{options[:type]}#{language_fields}#{from_to}"
		elsif location_condition
			PutsText.location_text(options[:type], options[:from], options[:to])
			"#{end_point}locations/#{options[:type]}#{language_fields}#{from_to}"
		elsif hotel_code_condition
			PutsText.hotel_code_text(options[:hotel_code])
			"#{end_point}hotels/#{options[:hotel_code]}#{language_fields}"
		else
			PutsText.hotels_text(options[:from], options[:to])
			"#{end_point}hotels#{language_fields}#{from_to}"
		end
	end

	def self.request_uri(options)
		if "booking".eql?(options[:category]) || "bookings".eql?(options[:category])
			URI.parse(self.booking_request_url(options))
		else
			URI.parse(self.request_url(options))
		end
	end

	def self.request_method(options, request_uri)
		if "booking".eql?(options[:category])
			if options[:mode].present?
				Net::HTTP::Put.new(request_uri)
			else
				Net::HTTP::Post.new(request_uri)
			end
		else
			Net::HTTP::Get.new(request_uri)
		end
	end

	def self.fetch(options = {})
		request_uri = self.request_uri(options)
		request = self.request_method(options, request_uri)
		request_headers = self.headers(request)
		request_headers.body = self.body(options) if "booking".eql?(options[:category])

		response = Net::HTTP.start(request_uri.hostname, request_uri.port, use_ssl: true) {|http|
			http.request(request_headers)
		}

		if "200".eql?(response.code)
			JSON.parse(response.body)
		else
			error = JSON.parse(response.body)
			{ error: "#{error["error"]["message"]}" }
		end
	end
end
