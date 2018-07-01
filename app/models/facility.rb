class Facility < ApplicationRecord
  belongs_to :language_code
  belongs_to :facility_group
  belongs_to :facility_typology

  has_many :interest_points, dependent: :destroy
  has_many :hotel_facilities, dependent: :destroy
  has_many :room_facilities, dependent: :destroy

  validates :code, presence: true
end
