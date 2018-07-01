class CreateFacilities < ActiveRecord::Migration[5.1]
  def change
    create_table :facilities do |t|
      t.integer :code, null: false
      t.string :description, null: false
      t.references :language_code, foreign_key: true
      t.references :facility_group, foreign_key: true
      t.references :facility_typology, foreign_key: true

      t.timestamps
    end
    add_index :facilities, :code
    add_index :facilities, :description
  end
end
