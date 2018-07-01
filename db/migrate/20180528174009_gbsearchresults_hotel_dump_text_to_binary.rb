class GbsearchresultsHotelDumpTextToBinary < ActiveRecord::Migration[5.1]
  def change
  	change_column :gbsearchresults, :hotel_dump, :binary, limit: 10.megabyte
  end
end
