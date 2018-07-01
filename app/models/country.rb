class Country < ApplicationRecord
	has_many :destinations, dependent: :destroy
	has_many :terminals, dependent: :destroy
	has_many :hotels, dependent: :destroy

	validates :code, presence: true
end
