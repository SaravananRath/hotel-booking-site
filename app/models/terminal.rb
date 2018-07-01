class Terminal < ApplicationRecord
  belongs_to :language_code
  belongs_to :country

  has_many :hotel_terminals, dependent: :destroy

  validates :code, presence: true
end
