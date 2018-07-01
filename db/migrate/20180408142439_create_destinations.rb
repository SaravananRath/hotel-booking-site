class CreateDestinations < ActiveRecord::Migration[5.1]
  def change
    create_table :destinations do |t|
      t.string :code, null: false
      t.string :name
      t.references :country, foreign_key: true

      t.timestamps
    end
    add_index :destinations, :code
    add_index :destinations, :name
  end
end
