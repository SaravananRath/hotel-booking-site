class FacilityGroup < ApplicationRecord
  belongs_to :language_code

  has_many :facilities, dependent: :destroy

  validates :code, presence: true
end
