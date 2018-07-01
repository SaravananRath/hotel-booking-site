class Board < ApplicationRecord
  belongs_to :language_code

  has_many :hotel_boards, dependent: :destroy

  validates :code, presence: true
end
