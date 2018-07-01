class CreateAdonisnationalities < ActiveRecord::Migration[5.1]
  def change
    create_table :adonisnationalities do |t|
      t.string :code
      t.string :name

      t.timestamps
    end
  end
end
