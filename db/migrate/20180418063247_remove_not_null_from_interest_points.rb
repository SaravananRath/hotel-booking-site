class RemoveNotNullFromInterestPoints < ActiveRecord::Migration[5.1]
  def change
  	change_column :interest_points, :poi_name, :string, :null => true
  	change_column :interest_points, :distance, :string, :null => true
  end
end
