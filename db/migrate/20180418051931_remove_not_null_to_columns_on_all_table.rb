class RemoveNotNullToColumnsOnAllTable < ActiveRecord::Migration[5.1]
  def change
  	change_column :accommodations, :type_description, :string, :null => true
  	change_column :boards, :description, :string, :null => true
  	change_column :categories, :description, :string, :null => true
  	change_column :currencies, :description, :string, :null => true
  	change_column :facilities, :description, :string, :null => true
  	change_column :facility_groups, :description, :string, :null => true
  	change_column :hotel_terminals, :distance, :float, :null => true
  	change_column :rooms, :type_code, :string, :null => true
  	change_column :rooms, :characteristic, :string, :null => true
  end
end

