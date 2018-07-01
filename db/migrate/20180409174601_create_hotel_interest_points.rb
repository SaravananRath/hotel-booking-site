class CreateHotelInterestPoints < ActiveRecord::Migration[5.1]
  def change
    create_table :hotel_interest_points do |t|
      t.references :hotel, foreign_key: true
      t.references :interest_point, foreign_key: true

      t.timestamps
    end
  end
end
