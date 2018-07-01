class GetCountryStateCity

	def self.getCountry(region)
		country_code = CountryStateCity.where(:cnd_code => region).pluck(:cnd_name)
		return country_code
	end

	def self.getState(country_code)
		state_code = CountryStateCity.where(:cnd_code => country_code).pluck(:cnd_name)
		return state_code
	end

	def self.getCity(state_code)
		city_code = CountryStateCity.where(:cnd_code => state_code).pluck(:cnd_name)
		return city_code
	end

end