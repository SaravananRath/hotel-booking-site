class Chain < ApplicationRecord
  belongs_to :language_code, optional: true

  has_many :hotels, dependent: :destroy

  validates :code, presence: true
end
