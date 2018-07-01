class CreateHotelBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :hotel_boards do |t|
      t.references :board, foreign_key: true
      t.references :hotel, foreign_key: true

      t.timestamps
    end
  end
end
