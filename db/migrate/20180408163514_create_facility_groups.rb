class CreateFacilityGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :facility_groups do |t|
      t.integer :code, null: false
      t.string :description, null: false
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :facility_groups, :code
    add_index :facility_groups, :description
  end
end
