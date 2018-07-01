class Accommodation < ApplicationRecord
  belongs_to :language_code

  has_many :categories, dependent: :destroy
  has_many :hotels, dependent: :destroy

  validates :code, presence: true
end
