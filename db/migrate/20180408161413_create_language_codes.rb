class CreateLanguageCodes < ActiveRecord::Migration[5.1]
  def change
    create_table :language_codes do |t|
      t.string :code, null: false

      t.timestamps
    end
    add_index :language_codes, :code
  end
end
