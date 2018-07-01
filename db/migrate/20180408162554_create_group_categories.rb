class CreateGroupCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :group_categories do |t|
      t.string :code, null: false
      t.integer :order
      t.string :name
      t.string :description
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :group_categories, :code
    add_index :group_categories, :description
  end
end
