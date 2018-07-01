class AdonisImage < ApplicationRecord

  belongs_to :adoni, :foreign_key => "hotelcode", :class_name => "Adoni" 

end
