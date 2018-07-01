class CreateZones < ActiveRecord::Migration[5.1]
  def change
    create_table :zones do |t|
      t.integer :code, null: false
      t.string :name
      t.string :description
      t.references :destination, foreign_key: true

      t.timestamps
    end
    add_index :zones, :code
  end
end
