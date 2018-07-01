class CreateHotelSegments < ActiveRecord::Migration[5.1]
  def change
    create_table :hotel_segments do |t|
      t.references :segment, foreign_key: true
      t.references :hotel, foreign_key: true

      t.timestamps
    end
  end
end
