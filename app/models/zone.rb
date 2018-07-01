class Zone < ApplicationRecord
  belongs_to :destination

  has_many :hotels, dependent: :destroy

  validates :code, presence: true
end
