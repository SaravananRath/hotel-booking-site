class GroupZone < ApplicationRecord
  belongs_to :zone
  belongs_to :destination

  validates :code, presence: true
end
