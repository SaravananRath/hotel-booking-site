class Segment < ApplicationRecord
  belongs_to :language_code

  has_many :hotel_segments, dependent: :destroy

  validates :code, presence: true
end
