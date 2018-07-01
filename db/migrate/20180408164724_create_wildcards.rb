class CreateWildcards < ActiveRecord::Migration[5.1]
  def change
    create_table :wildcards do |t|
      t.string :room_type, null: false
      t.string :room_code, null: false
      t.string :characteristic_code, null: false
      t.string :hotel_room_description

      t.timestamps
    end
    add_index :wildcards, :room_type
    add_index :wildcards, :room_code
    add_index :wildcards, :characteristic_code
  end
end
