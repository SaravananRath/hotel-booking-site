class Image < ApplicationRecord
  belongs_to :image_type
  belongs_to :hotel

  validates :path, presence: true
end
