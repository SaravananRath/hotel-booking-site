class CreateRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.integer :code, null: false
      t.string :type_code, null: false
      t.string :characteristic, null: false
      t.integer :min_pax
      t.integer :max_pax
      t.integer :max_adults
      t.integer :max_children
      t.integer :min_adults
      t.string :description
      t.string :type_description
      t.string :characteristic_description
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :rooms, :code
    add_index :rooms, :type_code
    add_index :rooms, :characteristic
    add_index :rooms, :characteristic_description
    add_index :rooms, :type_description
    add_index :rooms, :description
  end
end
