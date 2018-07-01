class AddColumnsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :type_of_company, :string
    add_column :users, :company_name, :string
    add_column :users, :region, :string
    add_column :users, :country, :string
    add_column :users, :state_city_country, :string
    add_column :users, :city_district, :string
    add_column :users, :title, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :phone_no, :string
    add_column :users, :currency, :string
  end
end
