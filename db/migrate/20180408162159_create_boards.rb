class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :code, null: false
      t.string :description, null: false
      t.string :multi_lingual_code
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :boards, :code
    add_index :boards, :description
  end
end
