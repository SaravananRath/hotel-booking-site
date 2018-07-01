class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :code, null: false
      t.integer :simple_code
      t.string :group
      t.string :description, null: false
      t.references :language_code, foreign_key: true
      t.references :accommodation, foreign_key: true

      t.timestamps
    end
    add_index :categories, :code
    add_index :categories, :description
  end
end
