class CreateTerminals < ActiveRecord::Migration[5.1]
  def change
    create_table :terminals do |t|
      t.integer :code, null: false
      t.string :terminal_type
      t.string :name
      t.string :description
      t.references :language_code, foreign_key: true
      t.references :country, foreign_key: true

      t.timestamps
    end
    add_index :terminals, :code
    add_index :terminals, :name
  end
end
