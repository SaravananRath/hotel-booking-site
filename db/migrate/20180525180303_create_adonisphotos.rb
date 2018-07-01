class CreateAdonisphotos < ActiveRecord::Migration[5.1]
  def change
    create_table :adonisphotos do |t|
      t.integer :adoni_id
      t.string :hotelcode
      t.string :url

      t.timestamps
    end
  end
end
