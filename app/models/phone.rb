class Phone < ApplicationRecord
  belongs_to :phoneable, polymorphic: true

  validates :number, presence: true
end
