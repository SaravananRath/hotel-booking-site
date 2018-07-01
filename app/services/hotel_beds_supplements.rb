class HotelBedsSupplements
	def self.render_error(error)
		{ error: error }
	end

	def self.availability_params(options)
		options[:category] = "booking"
		options[:type] = "availability"
		options[:availability_for] = PutsText.availability_for(options)

		options
	end
end