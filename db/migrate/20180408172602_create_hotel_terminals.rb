class CreateHotelTerminals < ActiveRecord::Migration[5.1]
  def change
    create_table :hotel_terminals do |t|
      t.float :distance, null: false
      t.references :terminal, foreign_key: true
      t.references :hotel, foreign_key: true

      t.timestamps
    end
    add_index :hotel_terminals, :distance
  end
end
