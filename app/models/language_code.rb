class LanguageCode < ApplicationRecord
	has_many :languages
	has_many :accommodations
	has_many :boards
	has_many :categories
	has_many :group_categories
	has_many :chains
	has_many :currencies
	has_many :facility_groups
	has_many :facilities
	has_many :segments
	has_many :terminals
	has_many :image_types
	has_many :rooms

	validates :code, presence: true
end
