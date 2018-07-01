class CreateInterestPoints < ActiveRecord::Migration[5.1]
  def change
    create_table :interest_points do |t|
      t.integer :order
      t.string :poi_name, null: false
      t.string :distance, null: false
      t.references :facility, foreign_key: true

      t.timestamps
    end
    add_index :interest_points, :poi_name
    add_index :interest_points, :distance
  end
end
