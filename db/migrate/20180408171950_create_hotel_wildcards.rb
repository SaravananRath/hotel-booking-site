class CreateHotelWildcards < ActiveRecord::Migration[5.1]
  def change
    create_table :hotel_wildcards do |t|
      t.references :hotel, foreign_key: true
      t.references :wildcard, foreign_key: true

      t.timestamps
    end
  end
end
