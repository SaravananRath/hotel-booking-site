class CreateGbsearchresults < ActiveRecord::Migration[5.1]
  def change
    create_table :gbsearchresults do |t|
      t.string :searchkey
      t.text :hotel_dump
      t.string :bestsupplier

      t.timestamps
    end
  end
end
