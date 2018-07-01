class ImageType < ApplicationRecord
  belongs_to :language_code

  has_many :images, dependent: :destroy

  validates :code, presence: true
end
