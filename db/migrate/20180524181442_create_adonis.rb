class CreateAdonis < ActiveRecord::Migration[5.1]
  def change
    create_table :adonis do |t|
      t.string :hotelcode
      t.string :giataid
      t.string :name
      t.string :hotelsupplier
      t.string :adress
      t.string :city
      t.string :country
      t.string :countrycode
      t.string :citycode
      t.string :categoryname
      t.string :coordinate
      t.string :hotelbeds
      t.string :gts
      t.string :tourico
      t.string :restel
      t.string :travco
      t.string :miki
      t.string :destination
      t.string :teamamerica
      t.string :italcamel

      t.timestamps
    end
  end
end