class AddColumnToAdoni < ActiveRecord::Migration[5.1]
  def change
    add_column :adonis, :hbdestination_id, :integer
    add_column :adonis, :hbdestination_type, :string
  end
end
