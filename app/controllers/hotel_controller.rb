class HotelController < ApplicationController
	def index
	end

	# Globalbeds search Integration for AutoComplete.
	def gb_autocomplete
		hotels = HotelsSearch.search_hotels_and_destinations(params[:q]) unless params[:q].nil?

		render json: { searched_for: params[:q], total: hotels[:hotels].count, destinations: hotels[:destinations], hotels: hotels[:hotels] }
	end

	def self.country
		hotels = HotelsSearch.search_hotels_and_destinations(params[:q]) unless params[:q].nil?

		render json: { searched_for: params[:q], total: hotels[:hotels].count, destinations: hotels[:destinations], hotels: hotels[:hotels] }
	end

	# Developed API's routes.
	def autocomplete
		hotels = HotelsSearch.search_hotels_and_destinations(params[:q]) unless params[:q].nil?
		render json: { searched_for: params[:q], total: hotels[:hotels].count, destinations: hotels[:destinations], hotels: hotels[:hotels] }
	end

	def search
		if params[:searchKey].present?
			if params[:searched_based_on].eql?("Destination Code")
				options = params
				options[:destination] = {}
				options[:availability_for] = "Destination"
				options[:destination][:code] = params[:searchKey]
				search_results = GlobalBedsSearch.search_for_availability(options)
				options[:hotels] = search_results[:search_results]

				render json: GlobalBedsSearch.search_with_pagination(options)
			elsif params[:searched_based_on].eql?("Hotel Code")
				options = params
				options[:availability_for] = "Hotels Code"

				render json: GlobalBedsSearch.search_with_pagination(options)
			end
		else
			options = HotelBedsSupplements.availability_params(params)
			search_results = GlobalBedsSearch.search_for_availability(options)
			pagination_options = {}
			pagination_options[:searchKey] = search_results[:search_cache][:searchkey]
			pagination_options[:from] = 0
			pagination_options[:to] = 10

			if options[:availability_for].eql?("Destination")
				pagination_options[:hotels] = search_results[:search_results]
				pagination_options[:availability_for] = "Destination"
			elsif options[:availability_for].eql?("Hotels Code")
				pagination_options[:availability_for] = "Hotels Code"
			end

			render json: GlobalBedsSearch.search_with_pagination(pagination_options)
		end
	end

	def availability
		options = HotelBedsSupplements.availability_params(params)
		hotels = Hotels.check_for_availability(options)

		render json: { availability_for: options[:availability_for], total: hotels['hotels']['hotels'].count, hotels: hotels['hotels']['hotels'] }
	end

	def checkrates
		options = params
		options[:category] = "booking"
		options[:type] = "checkrates"
		rates = Hotels.check_for_rates(options)

		render json: { name: rates['hotel']['name'], rates: rates['hotel'] }
	end

	def bookings
		options = params
		options[:category] = Hotels.find_booking_category(options)
		options[:type] = Hotels.find_booking_type(options)
		bookings = Hotels.bookings(options)

		render json: { bookings: bookings }
	end

	def hotel_detail
		render json: { hotel_detail: {} }
	end
end
