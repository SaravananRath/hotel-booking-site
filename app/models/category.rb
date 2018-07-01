class Category < ApplicationRecord
  belongs_to :language_code
  belongs_to :accommodation

  has_many :hotels, dependent: :destroy

  validates :code, presence: true
end
