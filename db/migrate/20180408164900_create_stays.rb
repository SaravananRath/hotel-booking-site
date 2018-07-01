class CreateStays < ActiveRecord::Migration[5.1]
  def change
    create_table :stays do |t|
      t.string :stay_type, null: false
      t.string :order
      t.string :description

      t.timestamps
    end
    add_index :stays, :stay_type
    add_index :stays, :description
  end
end
