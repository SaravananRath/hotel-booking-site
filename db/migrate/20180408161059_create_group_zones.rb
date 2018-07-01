class CreateGroupZones < ActiveRecord::Migration[5.1]
  def change
    create_table :group_zones do |t|
      t.integer :code, null: false
      t.string :name
      t.references :zone, foreign_key: true
      t.references :destination, foreign_key: true

      t.timestamps
    end
    add_index :group_zones, :code
  end
end
