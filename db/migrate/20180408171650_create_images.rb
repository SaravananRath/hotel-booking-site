class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :path, null: false
      t.integer :order
      t.references :image_type, foreign_key: true
      t.references :hotel, foreign_key: true

      t.timestamps
    end
    add_index :images, :path
  end
end
