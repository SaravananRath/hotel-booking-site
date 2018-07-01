class CreateHotelDumps < ActiveRecord::Migration[5.1]
  def change
    create_table :hotel_dumps do |t|
      t.integer :code, null: false
      t.binary :data, null: false, limit: 10.megabyte

      t.timestamps
    end
    add_index :hotel_dumps, :code
  end
end
