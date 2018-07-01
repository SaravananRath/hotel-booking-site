class CreateCurrencies < ActiveRecord::Migration[5.1]
  def change
    create_table :currencies do |t|
      t.string :code, null: false
      t.string :description, null: false
      t.string :currency_type
      t.references :language_code, foreign_key: true

      t.timestamps
    end
    add_index :currencies, :code
    add_index :currencies, :description
  end
end
