class CreateHotels < ActiveRecord::Migration[5.1]
  def change
    create_table :hotels do |t|
      t.integer :code, null: false
      t.string :name, null: false
      t.text :description
      t.float :longitude
      t.float :latitude
      t.string :address
      t.string :postal_code
      t.string :email
      t.string :license
      t.string :website
      t.string :s2c
      t.references :country, foreign_key: true
      t.references :destination, foreign_key: true
      t.references :zone, foreign_key: true
      t.references :category, foreign_key: true
      t.references :group_category, foreign_key: true
      t.references :chain, foreign_key: true
      t.references :accommodation, foreign_key: true

      t.timestamps
    end
    add_index :hotels, :code
    add_index :hotels, :name
    add_index :hotels, :email
    add_index :hotels, :website
  end
end
