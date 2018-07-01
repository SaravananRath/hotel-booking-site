class AddGbserachcacheReferenceToGbsearchresult < ActiveRecord::Migration[5.1]
  def change
  	add_column :gbsearchresults, :gbsearchcache_id, :integer
  end
end
