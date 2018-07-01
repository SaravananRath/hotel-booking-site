class CreateChains < ActiveRecord::Migration[5.1]
  def change
    create_table :chains do |t|
      t.string :code, null: false
      t.string :description
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :chains, :code
  end
end
