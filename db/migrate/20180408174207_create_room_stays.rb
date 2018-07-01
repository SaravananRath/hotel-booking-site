class CreateRoomStays < ActiveRecord::Migration[5.1]
  def change
    create_table :room_stays do |t|
      t.references :room, foreign_key: true
      t.references :stay, foreign_key: true

      t.timestamps
    end
  end
end
