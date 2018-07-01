class CreateFacilityTypologies < ActiveRecord::Migration[5.1]
  def change
    create_table :facility_typologies do |t|
      t.integer :code, null: false
      t.boolean :number_flag
      t.boolean :logic_flag
      t.boolean :fee_flag
      t.boolean :distance_flag
      t.boolean :age_from_flag
      t.boolean :age_to_flag
      t.boolean :date_from_flag
      t.boolean :date_to_flag
      t.boolean :time_from_flag
      t.boolean :time_to_flag
      t.boolean :ind_yes_or_no_flag
      t.boolean :amount_flag
      t.boolean :currency_flag
      t.boolean :app_type_flag
      t.boolean :text_flag

      t.timestamps
    end
    add_index :facility_typologies, :code
    add_index :facility_typologies, :ind_yes_or_no_flag
  end
end
