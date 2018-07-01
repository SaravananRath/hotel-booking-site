class CreateCountries < ActiveRecord::Migration[5.1]
  def change
    create_table :countries do |t|
      t.string :code, null: false
      t.string :iso_code

      t.timestamps
    end
    add_index :countries, :code
  end
end
