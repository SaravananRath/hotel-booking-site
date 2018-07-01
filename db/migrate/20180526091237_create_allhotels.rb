class CreateAllhotels < ActiveRecord::Migration[5.1]
  def change
    create_table :allhotels do |t|
      t.integer :hotelbeds
      t.integer :adonis
      t.string :hbname
      t.string :adname
      t.string :city
      t.string :hbcitycode
      t.string :adcitycode

      t.timestamps
    end
  end
end
