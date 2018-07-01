class CreatePhones < ActiveRecord::Migration[5.1]
  def change
    create_table :phones do |t|
      t.string :number, null: false
      t.string :phone_type
      t.references :phoneable, polymorphic: true

      t.timestamps
    end
    add_index :phones, :number
  end
end
