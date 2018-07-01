class CreateAdonisImages < ActiveRecord::Migration[5.1]
  def change
    create_table :adonis_images do |t|
      t.string :hotelcode
      t.string :photo
      t.timestamps
    end
  end
end
