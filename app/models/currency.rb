class Currency < ApplicationRecord
  belongs_to :language_code

  validates :code, :description, presence: true
end
