class CreateSegments < ActiveRecord::Migration[5.1]
  def change
    create_table :segments do |t|
      t.integer :code, null: false
      t.string :description
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :segments, :code
    add_index :segments, :description
  end
end
