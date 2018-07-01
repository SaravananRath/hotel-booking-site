class CreateGbsearchcaches < ActiveRecord::Migration[5.1]
  def change
    create_table :gbsearchcaches do |t|
      t.string :searchkey
      t.string :fromdate
      t.string :todate
      t.string :query
      t.string :query_type
      t.integer :rooms
      t.integer :adults
      t.integer :children
      t.integer :child1age
      t.integer :child2age
      t.integer :child3age
      t.integer :child4age
      t.integer :resultcount

      t.timestamps
    end
  end
end
