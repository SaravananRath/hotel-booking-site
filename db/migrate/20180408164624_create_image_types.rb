class CreateImageTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :image_types do |t|
      t.string :code, null: false
      t.string :description
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :image_types, :code
    add_index :image_types, :description
  end
end
