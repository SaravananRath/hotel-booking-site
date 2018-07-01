namespace :hotelbeds do
	desc "TODO"
	task database: :environment do
		Rake::Task['db:drop'].execute
		Rake::Task['db:create'].execute
		Rake::Task['db:migrate'].execute
		Rake::Task['db:seed'].execute
	end

	task setup: :environment do
		HotelBeds.setup
	end

	task check_for_new_hotels: :environment do
		Hotels.check_for_new_hotels
	end

	task update_new_hotels: :environment do
		Hotels.update_new_hotels
	end
end