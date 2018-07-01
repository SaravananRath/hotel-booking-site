class Language < ApplicationRecord
  belongs_to :language_code

  validates :code, presence: true
end
