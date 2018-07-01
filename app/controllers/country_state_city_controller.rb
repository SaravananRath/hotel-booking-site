class CountryStateCityController < ApplicationController
	def index
	end

	def country
		countries_code = GetCountryStateCity.getCountry(params[:region])
		render json: { countries: countries_code } 
	end

	def state
		states_code = GetCountryStateCity.getCountry(params[:country_code])
		render json: { states: states_code } 
	end

	def city
		cities_code = GetCountryStateCity.getCountry(params[:state_code])
		render json: { cities: cities_code } 
	end
end
