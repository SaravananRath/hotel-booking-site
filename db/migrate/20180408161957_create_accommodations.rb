class CreateAccommodations < ActiveRecord::Migration[5.1]
  def change
    create_table :accommodations do |t|
      t.string :code, null: false
      t.string :type_multi_description
      t.string :type_description, null: false
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :accommodations, :code
  end
end
