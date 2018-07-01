class CreateLanguages < ActiveRecord::Migration[5.1]
  def change
    create_table :languages do |t|
      t.string :code, null: false
      t.string :name
      t.string :description
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :languages, :code
    add_index :languages, :name
  end
end
