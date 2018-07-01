class CreateAdoniscities < ActiveRecord::Migration[5.1]
  def change
    create_table :adoniscities do |t|
      t.string :countrycode
      t.string :cityname
      t.string :citycode

      t.timestamps
    end
  end
end
