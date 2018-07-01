class CreateCountryStateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :country_state_cities do |t|
      t.string :cnd_name
      t.string :cnd_code
      t.string :cnd_group
      t.integer :priority
      t.integer :is_active
      t.string :deleted
      t.integer :created, :limit => 8
      t.integer :updated
      t.integer :updated_by
      t.bigint :cnd_parent_id
      t.string :generic_field
    end
  end
end
