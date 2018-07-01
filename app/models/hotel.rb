class Hotel < ApplicationRecord
  belongs_to :country
  belongs_to :city
  belongs_to :destination
  belongs_to :zone
  belongs_to :category, optional: true
  belongs_to :group_category, optional: true
  belongs_to :chain, optional: true
  belongs_to :accommodation, optional: true

  has_many :hotel_rooms, dependent: :destroy
  has_many :images, dependent: :destroy
  has_many :hotel_wildcards, dependent: :destroy
  has_many :hotel_terminals, dependent: :destroy
  has_many :hotel_facilities, dependent: :destroy
  has_many :hotel_boards, dependent: :destroy
  has_many :hotel_segments, dependent: :destroy
  has_many :hotel_interest_points, dependent: :destroy

  has_many :phones, as: :phoneable

  validates :code, :name, presence: true

  def hash_serializable(options = {})
    super(options).merge({ provider: "HotelBeds" })
  end
end
