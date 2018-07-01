class CreateAdoniscountries < ActiveRecord::Migration[5.1]
  def change
    create_table :adoniscountries do |t|
      t.string :code
      t.string :name

      t.timestamps
    end
  end
end
